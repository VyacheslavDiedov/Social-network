import React from "react";
import stale from "./users.module.css";
import axios from "axios";


class UsersAPIComponents extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageCurrent = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i = 1; i<=pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && stale.selectedPage}
                    onClick={(e) => {this.onPageCurrent(p)} }>{p}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            {}
                            <img src={user.photos.small != null ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQjB2JCZDGsuXMXCVMSj6JYtFjDlPkpPEGekYlmcXUVHDw9g-7&usqp=CAU' } className={stale.userPhoto}/>
                        </div>
                        <div>{user.id}
                            {user.followed ?
                                <button onClick={() => (this.props.unfollow(user.id))}>unfollow</button> :
                                <button onClick={() => (this.props.follow(user.id))}>follow</button>}
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

}

export default UsersAPIComponents;