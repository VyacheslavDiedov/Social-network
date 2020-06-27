import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setFollowingInProgress,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuper
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component{
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageCurrent = (pageNumber) => {
        const {pageSize, requestUsers} = this.props;
        requestUsers(pageNumber, pageSize);
    }

    render() {
        const {isFetching, totalUsersCount, pageSize, currentPage, users, follow, unfollow, followingInProgress} = this.props;
        return <>
            {isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount = {totalUsersCount}
                pageSize = {pageSize}
                currentPage = {currentPage}
                users = {users}
                follow = {follow}
                unfollow = {unfollow}
                onPageCurrent = {this.onPageCurrent}
                followingInProgress = {followingInProgress}
        />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    setFollowingInProgress, requestUsers}))(UsersContainer)