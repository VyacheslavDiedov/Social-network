import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {


    return (
        <div>
            <ProfileInfo profile = {profile} status = {status} updateStatus = {updateStatus}
                         savePhoto = {savePhoto} isOwner={isOwner} saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;