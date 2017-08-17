import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

export function fetchUserFromAPI() {
  return dispatch => {
    dispatch(getUser());

    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(getUserSuccess(responseJson.results));
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
