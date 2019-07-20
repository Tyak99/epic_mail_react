import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './header.css';

const Header = ({ toggle }) => (
  <header>
    <div className={styles.nav} id="myNav">
      <div style={{ fontSize: '30px' }} className={styles.icon}>
        <FontAwesomeIcon icon="bars" style={{ color: 'black' }} onClick={toggle} id="icon" />
      </div>
      <h2 className={styles.navBrand}>Epic Mail</h2>
      <img src="https://avatars.io/twitter/tundenasri" alt="profile" />
      <div className={styles.logout} id="signout">
        <a>
          <h4>Sign out</h4>
        </a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Header;
