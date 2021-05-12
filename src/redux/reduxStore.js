import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilelReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddlwar from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profilelReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlwar));

window.store = store;

export default store;
