import React from 'react';
import PropTypes from 'prop-types';
import styles from './messageList.css';

const MessageList = ({ messages, type }) => {
  const emptyBoxMessage = `No ${type} Message`;
  let allMessage;
  if (messages[0]) {
    allMessage = messages.map(message => (
      <li key={message.id}>
        {type === 'inbox' ? (
          <span className={styles.sender}>{message.senderid}</span>
        ) : (
          <span className={styles.sender}>
            To:
            {message.receiverid}
          </span>
        )}
        <span className={styles.subject}>{message.subject}</span>
        <span className={styles.body}>{message.message}</span>
      </li>
    ));
  }

  return (
    <div className={styles.mainSection}>
      {messages[0] ? <ul>{allMessage}</ul> : <h2 className={styles.emptyBox}>{emptyBoxMessage}</h2>}
    </div>
  );
};

MessageList.defaultProps = {
  messages: [],
};
MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
};
export default MessageList;
