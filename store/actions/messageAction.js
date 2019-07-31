import axios from 'axios';
import * as actionTypes from '../actionConstants';

const url = 'https://intense-thicket-60071.herokuapp.com/api/v1/messages';
export const getMessageSuccess = data => ({
  type: actionTypes.GET_INBOX_SUCCESS,
  data,
});

export const getSentMessageSuccess = data => ({
  type: actionTypes.GET_SENT_SUCCESS,
  data,
});

export const getMessageFailed = error => ({
  type: actionTypes.GET_MESSAGE_FAILED,
  error,
});

export const sendMessageFailed = error => ({
  type: actionTypes.SEND_MESSAGE_FAILED,
  error,
});

export const sendMessageStart = () => ({
  type: actionTypes.SEND_MESSAGE_START,
});

export const getSingleMessageSuccess = message => ({
  type: 'GET_SINGLE_MESSAGE',
  message,
});

export const sendMessageSuccess = () => ({
  type: actionTypes.SEND_MESSAGE_SUCCESS,
  message: 'Sent successfully',
});

export const getInbox = () => (dispatch) => {
  axios
    .get(url, {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    })
    .then((res) => {
      dispatch(getMessageSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getMessageFailed(error.response.data.error));
    });
};

export const getSentMessages = () => (dispatch) => {
  axios
    .get(`${url}/sent`, {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    })
    .then((res) => {
      dispatch(getSentMessageSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getMessageFailed(error.response.data.error));
    });
};

const validateEmail = (data) => {
  const emailCheck = /\S+@\S+\.\S+/;
  return emailCheck.test(data);
};

export const sendMessage = (data) => {
  const checkEmail = validateEmail(data.emailTo);
  const config = {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  };
  return (dispatch) => {
    if (checkEmail === true) {
      dispatch(sendMessageStart());
      return axios.post(url, data, config)
        .then((res) => {
          dispatch(sendMessageSuccess(res));
        })
        .catch((error) => {
          dispatch(sendMessageFailed(error.response.data.error));
        });
    }
    return dispatch(sendMessageFailed('Invalid email'));
  };
};

export const getSingleMessage = id => (dispatch) => {
  axios.get(`${url}/${id}`, {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  })
    .then((res) => {
      dispatch(getSingleMessageSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getMessageFailed(error.response.data.error));
    });
};
