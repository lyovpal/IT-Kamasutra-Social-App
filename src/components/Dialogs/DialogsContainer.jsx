import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator,} from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.dispatch(updateNewMessageBodyCreator(body));
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
