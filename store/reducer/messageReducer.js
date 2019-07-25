import * as actionTypes from '../actionConstants';

export const initialState = {
  inbox: [],
  sent: [],
  error: '',
  isLoading: false,
  status: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INBOX_SUCCESS:
      return {
        ...state,
        inbox: action.data,
      };
    case actionTypes.GET_MESSAGE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.GET_SENT_SUCCESS:
      return {
        ...state,
        sent: action.data,
      };
    case actionTypes.SEND_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        status: action.message,
      };
    case actionTypes.SEND_MESSAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        status: '',
        error: action.error,
      };
    default:
      return state;
  }
};
