import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSingleMessage } from '../../../store/actions/messageAction';
import Navigation from '../Navigation/Navigation';
import styles from './singleMessage.css';

export class SingleMessage extends React.Component {
  componentDidMount() {
    const { match, getMessage } = this.props;
    getMessage(match.params.id);
  }

  render() {
    const { message, error } = this.props;
    let display = 'Loading...';
    if (error) {
      display = (
        <h2>
          {error}
        </h2>
      );
    }
    if (message) {
      display = (
        <Fragment>
          <div className={styles.threadGroup}>
            <div className={styles.subject}>
              <h2>
                {message.subject}
              </h2>
            </div>
            <div className={styles.thread}>

              <div className={styles.subjectItem}>
                <p className={styles.from}>
                  <span style={{ marginRight: '10px' }}>
                    From
                  </span>
                  <em className={styles.sender}>
                    {message.senderid}
                  </em>
                </p>
                <p className={styles.to}>
                  <span style={{ marginRight: '10px' }}>

                    To:
                  </span>
                  <em className={styles.receiver}>
                    {message.receiverid}
                  </em>
                </p>
                <div className={styles.emailDate}>
                  <p style={{ color: 'grey' }}>
                    {message.created_at}
                  </p>
                </div>
                <div className={styles.icons}>
                  <a href="./compose.html">
                    <span className={styles.reply}>
                      <FontAwesomeIcon icon="reply" />
                    Reply
                    </span>
                  </a>
                  <span className={styles.btnDelete}>
                    <FontAwesomeIcon icon="trash-alt" />
                    Delete
                  </span>
                </div>
              </div>

            </div>
            <div className={styles.threadBody}>
              {message.message}
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <div>
        <Navigation />
        {display}
      </div>
    );
  }
}

// export default SingleMessage;
SingleMessage.defaultProps = {
  message: {},
  error: null,
};
SingleMessage.propTypes = {
  message: PropTypes.shape({
    subject: PropTypes.string,
    message: PropTypes.string,
  }),
  getMessage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  message: state.messages.message,
  error: state.messages.error,
});
const mapDispatchToprops = dispatch => ({
  getMessage: id => dispatch(getSingleMessage(id)),
});
export default connect(mapStateToProps, mapDispatchToprops)(SingleMessage);
