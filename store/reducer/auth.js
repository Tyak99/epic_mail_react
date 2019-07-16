import * as actionTypes from '../actionConstants';

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isLoading: true,
        token: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.data,
        isLoading: false,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        data: {},
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
