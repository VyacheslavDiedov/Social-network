import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render() {
        return <Header { ...this.props } />
    }
}

let mapStatePropsType = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})

export default connect(mapStatePropsType,{getAuthUserData})(HeaderContainer);