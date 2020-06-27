import React from "react";
import stale from "./users.module.css";
import {NavLink} from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";


let Users = ({currentPage, onPageCurrent, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Pagination
            currentPage = {currentPage}   onPageCurrent = {onPageCurrent}
            totalUsersCount = {totalUsersCount}   pageSize = {pageSize}
        />
        <div>
        {
            users.map(user => <User key={user.id}
                                    user={user}
                                    followingInProgress = {props.followingInProgress}
                                    unfollow = {props.unfollow}
                                    follow = {props.follow}
                            />
                    )
        }
        </div>
    </div>

}

export default Users;