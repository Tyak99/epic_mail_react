import React from 'react';
import PropTypes from 'prop-types';
import style from './LoginUi.css';


const LoginUi = ({
  submit, loading, redirect, change,
}) => (
  <form onSubmit={submit}>
    {redirect}
    <p id="alert" />
    <h2 className={style.formTitle}>Sign In</h2>
    <div className={style.formGroup}>
      <label htmlFor=""> Email* </label>
      <input
        type="email"
        className={style.formControl}
        placeholder="Email Address"
        id="email"
        // ref={email}
        name="email"
        onChange={change}
      />
    </div>
    <div className={style.formGroup}>
      <label htmlFor=""> Password*</label>
      <input
        type="password"
        className={style.formControl}
        placeholder="Password"
        id="password"
        // ref={password}
        name="password"
        onChange={change}
      />
    </div>
    <div className={style.forgotPassword}>
      <a href="./reset-password.html"> Forgot Password? </a>
    </div>
    <div style={{ textAlign: 'center' }}>
      <button type="submit" className={style.submitBtn} id="signin">
        {loading ? 'Loading...' : 'Sign in'}
      </button>
    </div>
  </form>
);

LoginUi.defaultProps = {
  redirect: null,
};
LoginUi.propTypes = {
  loading: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  redirect: PropTypes.node,
  change: PropTypes.func.isRequired,
};
export default LoginUi;
