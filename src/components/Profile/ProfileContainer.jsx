import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {getStatus, getUsersProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
    return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status}
                     updateStatus = {this.props.updateStatus} savePhoto = {this.props.savePhoto}
                     isOwner= {!this.props.match.params.userId} saveProfile = {this.props.saveProfile}/>
        )
    }
}

//let authRedirectContainer = withAuthRedirect(ProfileContainer);

let mapStatePropsType = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
//let WithUrlDateContainerComponents =  withRouter(authRedirectContainer);
//export default connect(mapStatePropsType, {getUsersProfile} )(WithUrlDateContainerComponents );

export default compose(connect(mapStatePropsType, {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile} ),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);