import React from "react";
import { connect } from "react-redux";
import Header from "./Header"
import {setAuthUserData} from "../../redux/authReducer"
import { authAPI } from "../../api/api";


class HeaderConatainer extends React.Component {
    componentDidMount () {
        authAPI.me()
        .then((resp) => {
            if (resp.data.resultCode === 0) {
                let {id,  email, login} = resp.data.data
                this.props.setAuthUserData(id, email, login)}
        });
    }
    render() {
  return (
     <Header {...this.props} />
  );
};
}
const mapStateToProps =  (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login, 
})


export default  connect(mapStateToProps,{setAuthUserData} )(HeaderConatainer);
