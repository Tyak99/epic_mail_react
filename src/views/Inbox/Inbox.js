import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation/Navigation';
import MessageList from '../../components/MessageList/MessageList';
import * as actionCreators from '../../../store/actions/messageAction';

export class Inbox extends Component {
  componentDidMount() {
    const { getInbox } = this.props;
    getInbox();
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <Navigation />
        <MessageList messages={messages} type="inbox" getMessage={this.getMessage} />
      </div>
    );
  }
}

Inbox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  getInbox: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  messages: state.messages.inbox,
});
const mapDispatchToProps = dispatch => ({
  getInbox: token => dispatch(actionCreators.getInbox(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
