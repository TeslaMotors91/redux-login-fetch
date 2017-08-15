import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  user: [],
  isFetching: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, isFetching: true, user: [], error: false };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: false
      };
    case FETCH_USER_FAILURE:
      return { ...state, isFetching: false, error: true, user: [] };
    default:
      return state;
  }
};
