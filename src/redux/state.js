const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        messages: this._state.profilePage.newPostText,
        likesCount: 11,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubsqriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubsqriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubsqriber(this._state);
    } else if (action.type === SEND_MESSAGE) { console.log(this._state, "++++++++++++++");
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 3, message: body });
      this._callSubsqriber(this._state);
    }
  },
};

export let addPostActionCreator = () => {
  return { type: "ADD-POST" };
};

export let updateNewPostTextActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", newText: text };
};

export let sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export let updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};

export default store;
