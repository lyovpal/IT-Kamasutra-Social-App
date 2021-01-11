const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullname: 'Anderson',
      status: 'Agent',
      location: { city: 'New York', country: 'USA' },
    },
    {
      id: 2,
      followed: true,
      fullname: 'Smith',
      status: 'Agent',
      location: { city: 'New York 2', country: 'USA' },
    },
    {
      id: 3,
      followed: false,
      fullname: 'Jhon',
      status: 'Agent',
      location: { city: 'New York 3', country: 'USA' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};
 export let followAC = (userId) => {
    return { type: FOLLOW, userId };
  };

  export let unFollowAC = (userId) => {
    return { type: UNFOLLOW, userId };
  };
  export let setUsersAC = (users) => {
    return { type: SET_USERS, users };
  };
export default usersReducer;
