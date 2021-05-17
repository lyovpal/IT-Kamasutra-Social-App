import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export let setAuthUserData = (id, email, login) => {
  return { type: SET_USER_DATA, data: { id, email, login } };
};

export const getAuthUserData = () => {
  return (dispacth) => {
    authAPI.me()
        .then((resp) => {
            if (resp.data.resultCode === 0) {
                let {id,  email, login} = resp.data.data
                dispacth(setAuthUserData(id, email, login))}
        });
  }
} 

export default authReducer;
