import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from '../SidebarLink/SidebarLink';
import styles from './sidebar.css';

const Sidebar = ({
  composeActive, inboxActive, sentActive, draftActive,
}) => (
  <Fragment>
    <aside className={styles.asideSection} id="mySidebar">
      <div className={styles.pages}>
        <ul>
          <SidebarLink link="/compose" icon="plus" name="Compose" isActive={composeActive} />
          <SidebarLink link="/inbox" icon="inbox" name="Inbox" isActive={inboxActive} />
          <SidebarLink link="/sent" icon="paper-plane" name="Sent" isActive={sentActive} />
          <SidebarLink link="/draft" icon="th-large" name="Draft" isActive={draftActive} />
        </ul>
      </div>
    </aside>
  </Fragment>
);

Sidebar.defaultProps = {
  composeActive: false,
  inboxActive: false,
  sentActive: false,
  draftActive: false,
};
Sidebar.propTypes = {
  composeActive: PropTypes.bool,
  inboxActive: PropTypes.bool,
  sentActive: PropTypes.bool,
  draftActive: PropTypes.bool,
};
export default Sidebar;
