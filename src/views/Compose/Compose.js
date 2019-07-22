import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation/Navigation';
import ComposeForm from '../../components/ComposeForm/ComposeForm';
import * as actionCreators from '../../../store/actions/messageAction';

export class Compose extends Component {
  state = {
    to: '',
    subject: '',
    body: '',
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitHandler = () => {
    const { to, subject, body } = this.state;
    const { sendMessage } = this.props;
    const data = {
      emailTo: to,
      subject,
      message: body,
    };
    sendMessage(data);
  }

  render() {
    const { isLoading, error, status } = this.props;
    return (
      <Fragment>
        <Navigation />
        <ComposeForm
          handleInput={this.handleInput}
          submitHandler={this.submitHandler}
          loading={isLoading}
          error={error}
          notification={status}
        />
      </Fragment>
    );
  }
}

Compose.defaultProps = {
  isLoading: false,
  error: null,
  status: '',
};

Compose.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  status: PropTypes.string,
};

const mapStateToProps = state => ({
  isLoading: state.messages.isLoading,
  error: state.messages.error,
  status: state.messages.status,
});
const mapDispatchToProps = dispatch => ({
  sendMessage: data => dispatch(actionCreators.sendMessage(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Compose);
