import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import Contact from "./ProfileStatus";
import stale from "../../../common/FormControls/FormControls.module.css";



const ProfileDataForm = ({ profile, handleSubmit, error}) => {
    return <Form onSubmit={ handleSubmit}>
            <button >
                Save
            </button>
        {error && <div className={stale.formControlSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField("", "lookingForAJob", [], Input, {type:"checkbox"})}
        </div>
            <b>My professional skills</b>:
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact}>
                <b>{key}:  {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })
        }
        </div>
    </Form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;