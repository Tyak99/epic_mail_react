import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './register.css';
import RegisterUi from '../../components/RegisterUi/RegisterUi';
import * as actionTypes from '../../../store/actions/auth';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { register } = this.props;
    const {
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    } = this.state;
    const authData = {
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    };
    register(authData);
  }


  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  render() {
    let authRedirect;
    const { token, error, loading } = this.props;
    if (token) {
      authRedirect = <Redirect to="/inbox" />;
    }
    return (
      <Fragment>
        <div className={style.nav}>
          <Link to="/">
            <h2 className={style.navBrand}>
            EPIC MAIL
              <FontAwesomeIcon icon="mail-bulk" className={style.icon} />
            </h2>
          </Link>
        </div>
        <RegisterUi
          handleInput={this.handleInput}
          submit={e => this.submitHandler(e)}
          error={error}
          redirect={authRedirect}
          loading={loading}
        />
      </Fragment>
    );
  }
}

Register.defaultProps = {
  error: null,
  token: null,
  loading: false,
};
Register.propTypes = {
  register: PropTypes.func.isRequired,
  token: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
};
const mapStateToprops = state => ({
  error: state.auth.error,
  token: state.auth.data.token,
  loading: state.auth.isLoading,
});
const mapDispatchToProps = dispatch => ({
  register: authData => dispatch(actionTypes.register(authData)),
});
export default connect(mapStateToprops, mapDispatchToProps)(Register);
