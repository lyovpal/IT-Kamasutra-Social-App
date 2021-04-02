const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, messages: 'Post 1', likesCount: 12 },
    { id: 2, messages: 'Post 2', likesCount: 11 },
  ],
  newPostText: 'Start message',
  profile: null,
};

const profilelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        messages: state.newPostText,
        likesCount: 11,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: return {
      ...state, profile: action.profile
    }
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
export let setUserProfileAC = (profile) => {
  return {type: SET_USER_PROFILE, profile}
}
export default profilelReducer;
