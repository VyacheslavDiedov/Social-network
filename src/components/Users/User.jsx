import React from "react";
import stale from "./users.module.css";
import {NavLink} from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";


let Users = ({currentPage, onPageCurrent, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Pagination
            currentPage = {currentPage}   onPageCurrent = {onPageCurrent}
            totalUsersCount = {totalUsersCount}   pageSize = {pageSize}
        />
        {
            users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img
                                src={user.photos.small != null ? user.photos.small :
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQjB2JCZDGsuXMXCVMSj6JYtFjDlPkpPEGekYlmcXUVHDw9g-7&usqp=CAU'}
                                className={stale.userPhoto}/>
                                </NavLink>
                        </div>
                        <div>{user.id}
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.unfollow(user.id);}}>unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.follow(user.id)}}>follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </span>
                </span>
            </div>)
        }
    </div>

}

export default Users;