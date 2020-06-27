import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ((d) => <DialogItem name = {d.name} id = {d.id}></DialogItem>);

    let messageElements = state.messages.map((m) => <Message message = {m.message}></Message> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className= {s.messages}>
                <div>
                    <div>{messageElements}</div>
                    <AddMessageReduxForm onSubmit = {addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component= {Textarea} validate={[required, maxLength50]} name= "newMessageBody" placeholder = "Enter your message">

                </Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);




export default Dialogs;