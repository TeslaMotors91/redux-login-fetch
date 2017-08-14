import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from './types';

export function fetchMoviesFromAPI() {
  return dispatch => {
    dispatch(getMovie());

    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(getMovieSuccess(responseJson.movies));
      })
      .catch(error => {
        console.error(error);
        dispatch(getMovieFailure());
      });
  };
}

function getMovie() {
  return {
    type: FETCH_MOVIE
  };
}

function getMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: data
  };
}

function getMovieFailure() {
  return {
    type: FETCH_MOVIE_FAILURE
  };
}
