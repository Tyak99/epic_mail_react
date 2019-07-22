import * as actionTypes from '../actionConstants';

const initialState = {
  inbox: [],
  sent: [],
  error: '',
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
    default:
      return state;
  }
};
