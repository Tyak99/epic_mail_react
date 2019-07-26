import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoginUi from '../../components/LoginUi/LoginUi';
import * as actionCreators from '../../../store/actions/auth';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = (e) => {
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    onSubmit(email, password);
  }

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    let authRedirect;
    const { token } = this.props;
    if (token) {
      authRedirect = <Redirect to="/inbox" />;
    }
    const { isLoading, error } = this.props;
    return (
      <div>
        <LoginUi
          submit={e => this.submitHandler(e)}
          loading={isLoading}
          error={error}
          redirect={authRedirect}
          change={e => this.inputHandler(e)}
        />
      </div>
    );
  }
}

Login.defaultProps = {
  isLoading: false,
  error: null,
  token: null,
};
Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  token: PropTypes.string,
};
const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => dispatch(actionCreators.login(email, password)),
});
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  token: state.auth.data.token,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
