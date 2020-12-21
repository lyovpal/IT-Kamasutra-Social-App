import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   <StoreContext.Consumer>
//     {(store) => {
//       let state = props.store.getState().dialogsPage;

//       let onSendMessageClick = () => {
//         store.dispatch(sendMessageCreator());
//       };

//       let onNewMessageChange = (body) => {
//         store.dispatch(updateNewMessageBodyCreator(body));
//       };

//       return (
//         <Dialogs
//           sendMessage={onSendMessageClick}
//           updateNewMessageBody={onNewMessageChange}
//           state={state}
//         />
//       );
//     }}
//   </StoreContext.Consumer>;
// };

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
