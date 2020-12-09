import dialogsReducer from "./dialogsReducer";
import profilelReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, messages: "Post 1", likesCount: 12 },
        { id: 2, messages: "Post 2", likesCount: 11 },
      ],
      newPostText: "Start message",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Hello" },
      ],
      dialogsData: [
        { id: 1, name: "Dimyich" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubsqriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubsqriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profilelReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubsqriber(this._state);
  },
};

export default store;
