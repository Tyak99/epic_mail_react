import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './header.css';

const Header = ({ toggle, logout }) => (
  <header>
    <div className={styles.nav} id="myNav">
      <div style={{ fontSize: '30px' }} className={styles.icon}>
        <FontAwesomeIcon icon="bars" style={{ color: 'black' }} onClick={toggle} id="icon" />
      </div>
      <h2 className={styles.navBrand}>Epic Mail</h2>
      <img src="https://avatars.io/twitter/tundenasri" alt="profile" />
      <div className={styles.logout} id="signout">
        <Link to="/" onClick={logout}>
          <h4>Sign out</h4>
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
