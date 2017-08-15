import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

export function fetchUserFromAPI() {
  return dispatch => {
    dispatch(getUser());

    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(responseJson => {
        console.log('Been There...');
        dispatch(getUserSuccess(responseJson.results[0]));
        console.log('Done That...');
        console.log('Root Object', responseJson);
        console.log(responseJson.results);
        console.log(responseJson.results.gender);
        console.log(responseJson.results.name);
      })
      .catch(error => {
        console.error(error);
        dispatch(getUserFailure());
      });
  };
}

function getUser() {
  return {
    type: FETCH_USER
  };
}

function getUserSuccess(data) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data
  };
}

function getUserFailure() {
  return {
    type: FETCH_USER_FAILURE
  };
}
