import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

const mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)); },
        sendMessage: () => { dispatch(sendMessageCreator()); }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
