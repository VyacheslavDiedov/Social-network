import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className = {s.dialog + '' + s.active}>
            <NavLink to = { path } > {props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className= {s.message}>{props.message}</div>
    );
}




const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Slavik'},
        {id: 2, name: 'Slavik2'},
        {id: 3, name: 'Slavik3'},
        {id: 4, name: 'Slavik4'},
        {id: 5, name: 'Slavik5'},
        {id: 6, name: 'Slavik6'}
    ]

    let messages = [
        {id: 1, message:"Hi"},
        {id: 2, message:"Ky"},
        {id: 3, message:"Hello"},
        {id: 4, message:"HIy"},
        {id: 5, message:"F"},
    ]

    let dialogsElements = dialogs
        .map ((d) => <DialogItem name = {d.name} id = {d.id}></DialogItem>)

    let messageElements = messages
        .map((m) => <Message message = {m.message}></Message> )

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className= {s.messages}>
                <div>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}


export default Dialogs;