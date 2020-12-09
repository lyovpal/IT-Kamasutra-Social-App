import {combineReducers, createStore} from 'redux';
import profilelReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer"


let reducers = combineReducers({
    profilePage: profilelReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;