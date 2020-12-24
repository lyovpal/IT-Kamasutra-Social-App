const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Hello' },
  ],
  dialogsData: [
    { id: 1, name: 'Dimyich' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ],
  newMessageBody: 'Start Message',
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy = {
        ...state,
        newMessageBody: action.body,
      };
      return stateCopy;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      stateCopy = {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 3, message: body }],
      };
      return stateCopy;
    default:
      return state;
  }
};

export let sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export let updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};

export default dialogsReducer;
