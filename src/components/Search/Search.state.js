import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSearchFocus } from 'state/actions';

import Search from './Search';

class SearchState extends Component {
  constructor(props) {
    super(props);
    const { search = '' } = queryString.parse(props.location.search);
    // console.log('props', search)

    this.state = {
      search,
      focus: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search = '' },
    } = this.props;
    const {
      location: { search: oldSearch },
    } = prevProps;
    const searchHasChanged = search !== oldSearch;

    if (searchHasChanged) {
      const searchQuery = queryString.parse(search);
      this.setState({ search: searchQuery.search || '' });
    }
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSearch() {
    const { history } = this.props;
    const { search } = this.state;

    history.push({ pathname: '/', search: `?search=${search}` });
  }

  render() {
    const { className, toggleSearchFocus: dispatchedToggleSearchFocus } = this.props;

    return (
      <Search
        className={className}
        handleSearch={this.handleSearch}
        handleChange={this.handleChange}
        toggleFocus={dispatchedToggleSearchFocus}
        {...this.state}
      />
    );
  }
}

SearchState.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  toggleSearchFocus: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

SearchState.defaultProps = {
  className: '',
};

const mapStateToProps = ({ search, focus }) => ({ search, focus });

const mapDispatchToProps = (dispatch) => ({
  toggleSearchFocus: () => dispatch(toggleSearchFocus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchState));
