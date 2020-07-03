import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
    let [editMode, setEditMode] = useState(false);


    if (!profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQjB2JCZDGsuXMXCVMSj6JYtFjDlPkpPEGekYlmcXUVHDw9g-7&usqp=CAU"}
                     className={s.mainPhoto} alt=""/>
                {isOwner && <div><input type={'file'} onChange={onMainPhotoSelected}/></div>}
                {editMode ? <ProfileDataForm profile={profile}/> :
                    <ProfileData profile={profile} isOwner = {isOwner} goToEditMode = {() => setEditMode(true)}/>}



                <ProfileStatusWithHook status = {status}
                                updateStatus = {updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>
        edit
        </button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yas" : "no"}
        </div>
        {profile.lookingForAJob && <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })
        }
        </div>
    </div>
}

const ProfileDataForm = ({profile}) => {
    return <div>
        Form
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;