import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { logoutUser } from '../../../store/actions/auth';
import Sidebar from '../Sidebar/Sidebar';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { logout } = this.props;

    return (
      <Fragment>
        <Header toggle={this.toggle} logout={logout} />
        <Sidebar isOpen={isOpen} />
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});
export default connect(null, mapDispatchToProps)(Navigation);
