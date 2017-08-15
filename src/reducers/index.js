import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MovieReducer from './MovieReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  auth: AuthReducer,
  movieReducer: MovieReducer,
  userReducer: UserReducer
});
