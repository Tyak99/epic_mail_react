import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './composeForm.css';

const ComposeForm = ({
  handleInput, submitHandler, loading, error, notification,
}) => (
  <section className={styles.section}>
    <h2>New Message</h2>
    <form action="" className="composeForm">
      <div className="notificatiion">
        <h4>
          {error}
          { notification }
        </h4>
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          placeholder="To - email / group name"
          className="email-to"
          onChange={handleInput}
          name="to"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Subject"
          id="message-subject"
          onChange={handleInput}
          name="subject"
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          id="message-body"
          cols="30"
          rows="10"
          name="body"
          onChange={handleInput}
        />
      </div>
      <button type="button" className={cx(styles.btn, styles.btnDraft)}>
        Save to draft
      </button>
      <button
        type="button"
        className={cx(styles.btn, styles.send)}
        onClick={() => submitHandler()}
        id="btn-send"
      >
        {loading ? 'Sending' : 'Send'}
      </button>
    </form>
  </section>
);

ComposeForm.defaultProps = {
  notification: '',
};
ComposeForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  notification: PropTypes.string,
};

export default ComposeForm;
