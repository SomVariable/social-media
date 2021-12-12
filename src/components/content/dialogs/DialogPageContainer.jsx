import React from 'react';
import {addNewMessageCreator, changeMessageCreator} from "../../../redux/dialogReducer";
import DialogPage from "./DialogPage";
import {connect} from "react-redux";

const mapToProps = (state) => {
    return {
        dialogsData: state.dialogsState
    }
}

const mapToDispatch = (dispatch) => {
    return {
        onMessageSend: (userData) => {
            dispatch(addNewMessageCreator(userData))
        },
        onMessageChange: (newValue) => {
            dispatch(changeMessageCreator(newValue))
        }
    }
}

const DialogPageContainer = connect(mapToProps, mapToDispatch)(DialogPage)


export default DialogPageContainer;