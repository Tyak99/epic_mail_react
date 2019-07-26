import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './sidebarLink.css';

const SidebarLink = ({
  link, icon, name, isActive,
}) => (
  <Fragment>
    <Link to={link}>
      <li className={isActive ? styles.active : ''}>
        <FontAwesomeIcon icon={icon} style={{ paddingRight: '10px', fontSize: '20px' }} />
        {name}
      </li>
    </Link>
  </Fragment>
);

SidebarLink.defaultProps = {
  isActive: false,
};
SidebarLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
export default SidebarLink;
