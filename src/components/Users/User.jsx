import React from "react";
import stale from "./users.module.css";
import {NavLink} from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
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
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {unfollow(user.id);}}>unfollow</button> :
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {follow(user.id)}}>follow</button>}
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
            </div>
}

export default User;