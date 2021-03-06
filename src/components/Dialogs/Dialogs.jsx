import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItems";
import Message from "./Messages/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/state";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = props.state.messages.map((message) => (
    <Message messages={message.message} id={message.id} />
  ));

  const newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea placeholder="Message" value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
