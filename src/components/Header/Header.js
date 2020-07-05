import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Search from 'components/Search';

import './Header.scss';

export const Header = (props) => {
  const handleLogoClick = () => {
    const { history } = props;
    history.replace({ pathname: '/', search: '' });
  };

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo" onClick={handleLogoClick}>
          Mercado Livre
        </h1>
        <Search />
      </div>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired
};

export default withRouter(Header);
