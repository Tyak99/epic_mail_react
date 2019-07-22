import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation/Navigation';
import MessageList from '../../components/MessageList/MessageList';
import { getSentMessages as getMessage } from '../../../store/actions/messageAction';

export class Sent extends React.Component {
  componentDidMount() {
    const { getSentMessages } = this.props;
    getSentMessages();
  }

  render() {
    const { sentMessages } = this.props;
    return (
      <Fragment>
        <Navigation />
        <MessageList messages={sentMessages} type="Sent" />
      </Fragment>
    );
  }
}

Sent.defaultProps = {
  sentMessages: [],
};
Sent.propTypes = {
  getSentMessages: PropTypes.func.isRequired,
  sentMessages: PropTypes.arrayOf(PropTypes.object),
};
const mapStateToProps = state => ({
  sentMessages: state.messages.sent,
});
const mapDispatchToProps = dispatch => ({
  getSentMessages: () => dispatch(getMessage()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sent);
