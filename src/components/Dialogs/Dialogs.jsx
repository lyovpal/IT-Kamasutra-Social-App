import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogsItems";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  console.log(props)
  const dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = props.state.messages.map((message) => (
    <Message messages={message.message} id={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
