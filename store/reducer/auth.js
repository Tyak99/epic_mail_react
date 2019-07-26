import * as actionTypes from '../actionConstants';

const initialState = {
  data: {},
  error: null,
  isLoading: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        data: action.data,
        isLoading: false,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        data: {},
        error: action.error,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        data: {},
      };
    default:
      return state;
  }
};
