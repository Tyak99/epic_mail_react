import axios from 'axios';
import * as actionTypes from '../actionConstants';

const token = localStorage.getItem('token');
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

export const getDraftMessageSuccess = data => ({
  type: actionTypes.GET_DRAFT_SUCCESS,
  data,
});

export const getInbox = () => {
  const url = 'https://intense-thicket-60071.herokuapp.com/api/v1/messages';
  return (dispatch) => {
    axios
      .get(url, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch(getMessageSuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(getMessageFailed(error.response.data.error));
      });
  };
};

export const getSentMessages = () => {
  const url = 'https://intense-thicket-60071.herokuapp.com/api/v1/messages/sent';
  return (dispatch) => {
    axios
      .get(url, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch(getSentMessageSuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(getMessageFailed(error.response.data.error));
      });
  };
};

export const getDraftMessages = () => {
  const url = 'https://intense-thicket-60071.herokuapp.com/api/v1/messages/draft';
  return (dispatch) => {
    axios
      .get(url, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log('TCL: getDraftMessages -> res', res);
        dispatch(getDraftMessageSuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(getMessageFailed(error.response.data.error));
      });
  };
};
