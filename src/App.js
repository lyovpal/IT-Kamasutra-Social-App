import React from "react";
import "./App.css";
import HeaderConatainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersConatiner";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderConatainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
