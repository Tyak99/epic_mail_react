import * as actionTypes from '../actionConstants';

const initialState = {
  inbox: [],
  sent: [],
  drafts: [],
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
    case actionTypes.GET_DRAFT_SUCCESS:
      return {
        ...state,
        drafts: action.data,
      };
    default:
      return state;
  }
};
