import axios from 'axios';
import * as actionTypes from '../actionConstants';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const loginSuccess = data => ({
  type: actionTypes.LOGIN_SUCCESS,
  data,
});

export const loginFailed = error => ({
  type: actionTypes.LOGIN_FAILED,
  error,
});
export const login = (email, password) => {
  const url = 'https://intense-thicket-60071.herokuapp.com/api/v1/auth/login';
  const authData = {
    email,
    password,
  };
  return (dispatch) => {
    dispatch(authStart());
    return axios
      .post(url, authData)
      .then((response) => {
        const { token } = response.data.data;
        localStorage.setItem('token', token);
        dispatch(loginSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(loginFailed(error.response.data.error));
      });
  };
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  if (token) {
    dispatch(loginSuccess(token, name));
  }
};
