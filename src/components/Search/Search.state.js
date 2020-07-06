import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSearchFocus, setInputText } from 'state/actions';
import { saveNewSearch, getSearchHistory } from 'state/searchStorage';
import { debounce } from 'utils';
import SearchList from 'components/SearchList';
import Search from './Search';

class SearchState extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChange = debounce(this.handleChange, 100);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.listener = this.listener.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    const { location, inputText, setInputText: dispatchSetInputText } = this.props;
    const { search = '' } = queryString.parse(location.search);

    if (search !== inputText) {
      dispatchSetInputText(search);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search = '' }
    } = this.props;
    const {
      location: { search: oldSearch }
    } = prevProps;
    const searchHasChanged = search !== oldSearch;

    if (searchHasChanged) {
      const searchQuery = queryString.parse(search);
      const { setInputText: dispatchSetInputText } = this.props;
      dispatchSetInputText(searchQuery.search || '');
    }
  }

  listener(evt) {
    if (evt.target.className !== 'search-list-item') {
      const { toggleSearchFocus: dispatchedToggleSearchFocus } = this.props;
      dispatchedToggleSearchFocus(false);
      document.removeEventListener('mousedown', this.listener, false);
    }
  }

  handleChange(e) {
    const { setInputText: dispatchSetInputText } = this.props;
    dispatchSetInputText(e.current.value);
  }

  handleSearch() {
    const { history } = this.props;
    const { inputText } = this.props;

    document.removeEventListener('mousedown', this.listener, false);
    history.push({ pathname: '/', search: `?search=${inputText}` });
    saveNewSearch(inputText);
  }

  handleSelect(value) {
    const { history, setInputText: dispatchSetInputText, toggleSearchFocus: dispatchedToggleSearchFocus } = this.props;

    document.removeEventListener('mousedown', this.listener, false);
    dispatchSetInputText(value);
    history.push({ pathname: '/', search: `?search=${value}` });
    dispatchedToggleSearchFocus(false);
  }

  handleFocus() {
    const { toggleSearchFocus: dispatchedToggleSearchFocus } = this.props;
    document.addEventListener('mousedown', this.listener, false);
    dispatchedToggleSearchFocus(true);
  }

  render() {
    const { className, focus, inputText } = this.props;
    const list = getSearchHistory();
    const searchWrapperClasses = classNames('search-wrapper', { 'search-wrapper--focused': focus });

    return (
      <div className={searchWrapperClasses}>
        <Search
          className={className}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          focus={focus}
          onFocus={this.handleFocus}
          inputText={inputText}
        />
        <SearchList list={list} handleSelect={this.handleSelect} inputText={inputText} />
      </div>
    );
  }
}

SearchState.propTypes = {
  className: PropTypes.string,
  toggleSearchFocus: PropTypes.func.isRequired,
  focus: PropTypes.bool,
  setInputText: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
};

SearchState.defaultProps = {
  className: '',
  focus: false
};

const mapStateToProps = ({ inputText, focus }) => ({ inputText, focus });

const mapDispatchToProps = dispatch => ({
  toggleSearchFocus: () => dispatch(toggleSearchFocus()),
  setInputText: text => dispatch(setInputText(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchState));
