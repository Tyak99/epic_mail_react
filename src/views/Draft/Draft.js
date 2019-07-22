import React, { Fragment } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation/Navigation';
import styles from './draft.css';
import { getDraftMessages } from '../../../store/actions/messageAction';

export class Draft extends React.Component {
  componentDidMount() {
    const { getDraft } = this.props;
    getDraft();
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div className={styles.mainSection}>
          <ul>
            <li>
              <div className="message-header">
                <span className={styles.status}>Drafted at NOON</span>
                <span className={styles.subject}> Sorry bro </span>
              </div>
              <p className={styles.messageBody}>I want to tell you...</p>
              <button type="button" className={cx(styles.btn, styles.btnSend)}>
                View
              </button>
              <button type="button" className={cx(styles.btn, styles.btnDelete)}>
                Delete
              </button>
              `
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

Draft.propTypes = {
  getDraft: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  getDraft: token => dispatch(getDraftMessages(token)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Draft);
