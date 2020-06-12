import React from 'react';
import s from './NavbarFriends.module.css';


const NavbarFriends = (props) => {

    let friendsArray = props.friends.friendsName.map( myFriend => (<div>
            <div>{myFriend.name}</div>
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQjB2JCZDGsuXMXCVMSj6JYtFjDlPkpPEGekYlmcXUVHDw9g-7&usqp=CAU"/>
            </div>));

    return (
        <nav>
            <div className={s.item}>
                <h1>Friends</h1>
            </div>
            <div className={s.item}>
                {friendsArray}
            </div>
        </nav>
    )
}

export default NavbarFriends;