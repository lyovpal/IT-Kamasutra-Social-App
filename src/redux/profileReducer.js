const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  profilePage: {
    posts: [
      { id: 1, messages: "Post 1", likesCount: 12 },
      { id: 2, messages: "Post 2", likesCount: 11 },
    ],
    newPostText: "Start message",
  },
};

const profilelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        messages: state.newPostText,
        likesCount: 11,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export let addPostActionCreator = () => {
    return { type: ADD_POST };
  };
  
  export let updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
  };
  

export default profilelReducer;
