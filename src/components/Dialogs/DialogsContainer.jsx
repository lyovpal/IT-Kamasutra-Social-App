import React from 'react';
import Dialogs from './Dialogs';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      sendMessage={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
      state={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
