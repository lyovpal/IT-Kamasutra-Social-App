let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, messages: "Post 1", likesCount: 12 },
        { id: 2, messages: "Post 2", likesCount: 11 },
      ],
      newPostText: "It-kamasutra.com",
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

  addPost() {
    let newPost = {
      id: 4,
      messages: this._state.profilePage.newPostText,
      likesCount: 11,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubsqriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubsqriber(this._state);
  },
};

export default store;
