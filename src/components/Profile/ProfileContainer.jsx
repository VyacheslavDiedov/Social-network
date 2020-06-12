import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {getStatus, getUsersProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter, Redirect} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 8456;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
    return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}

//let authRedirectContainer = withAuthRedirect(ProfileContainer);

let mapStatePropsType = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
//let WithUrlDateContainerComponents =  withRouter(authRedirectContainer);
//export default connect(mapStatePropsType, {getUsersProfile} )(WithUrlDateContainerComponents );

export default compose(connect(mapStatePropsType, {getUsersProfile, getStatus, updateStatus} ),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);