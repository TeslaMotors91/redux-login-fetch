import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...state, isFetching: true, movies: [], error: false };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
        error: false
      };
    case FETCH_MOVIE_FAILURE:
      return { ...state, isFetching: false, error: true, movies: [] };
    default:
      return state;
  }
};
