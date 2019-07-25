import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormGroup from '../FormGroup/FormGroup';
import style from './registerUi.css';

const RegisterUi = ({
  handleInput, submit, error, redirect, loading,
}) => {
  const formProps = [
    { type: 'text', placeholder: 'First Name', id: 'firstName' },
    { type: 'text', placeholder: 'Last Name', id: 'lastName' },
    { type: 'email', placeholder: 'Email Address', id: 'email' },
    { type: 'password', placeholder: 'Password', id: 'password' },
    {
      type: 'password',
      placeholder: 'Confirm Password',
      id: 'confirmPassword',
    },
  ];
  return (
    <div className={style.container}>
      {redirect}
      <div className={style.backgroundLogin}>
        <img
          src="https://directlinedev.com/media/services/service/background/background_11.wide.jpeg"
          alt=""
        />
      </div>
      <div className={style.formSection}>
        <form onSubmit={submit}>
          <h2 className="formTitle">Sign Up</h2>
          <p className={style.error}>
            { error }
          </p>
          {formProps.map(prop => (
            <FormGroup
              type={prop.type}
              placeholder={prop.placeholder}
              id={prop.id}
              key={prop.id}
              handleInput={handleInput}
              name={prop.id}
            />
          ))}
          <div style={{ textAlign: 'center' }}>
            <button id="submit" type="submit" className={style.submitBtn}>
              {loading ? 'Loading...' : 'Register'}
            </button>
          </div>
          <p className={style.signInLink}>
            Already have an account?
            <Link to="/">
              <span>
                Sign In
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

RegisterUi.defaultProps = {
  redirect: null,
  error: null,
  loading: false,
};
RegisterUi.propTypes = {
  handleInput: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  error: PropTypes.string,
  redirect: PropTypes.element,
  loading: PropTypes.bool,
};
export default RegisterUi;
