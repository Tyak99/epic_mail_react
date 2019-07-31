import axios from 'axios';
import * as actionTypes from '../actionConstants';

const url = 'https://intense-thicket-60071.herokuapp.com/api/v1/auth';
export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = data => ({
  type: actionTypes.AUTH_SUCCESS,
  data,
});

export const authFailed = error => ({
  type: actionTypes.AUTH_FAILED,
  error,
});
export const login = (email, password) => {
  const authData = {
    email,
    password,
  };
  return (dispatch) => {
    dispatch(authStart());
    return axios
      .post(`${url}/login`, authData)
      .then((response) => {
        const { token } = response.data.data;
        localStorage.removeItem('token');
        localStorage.setItem('token', token);
        dispatch(authSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(authFailed(error.response.data.error));
      });
  };
};

export const register = authData => (dispatch) => {
  dispatch(authStart());
  const regex = /^[a-z0-9][a-z0-9-_]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
  if (authData.password !== authData.confirmPassword) {
    return dispatch(authFailed('Error! Passwords do not match'));
  }
  if (!regex.test(authData.email)) {
    return dispatch(authFailed('Error! Invalid email address provided'));
  }
  return axios.post(`${url}/signup`, authData)
    .then((res) => {
      const { token } = res.data.data;
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
      dispatch(authSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(authFailed(error.response.data.error));
    });
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  if (token) {
    dispatch(authSuccess(token, name));
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT',
  };
};
