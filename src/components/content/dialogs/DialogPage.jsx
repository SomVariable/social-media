import React from 'react';
import style from './dialogs.module.css'
import DialogItem from "./dialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addNewMessageCreator, changeMessageCreator} from "../../../redux/dialogReducer";

function DialogPage(props) {
    const onMessageSend = () => {
        props.dispatch(addNewMessageCreator({id: new Date().getMinutes().toString() + new Date().getSeconds() + new Date().getDay() - 0 , userName: 'Kostya'}))
    }

    const onMessageChange = e => {
        props.dispatch(changeMessageCreator(e.target.value))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsData.dialogs.map(dialog => <DialogItem id = {dialog.id} name = {dialog.name}/>)}
            </div>
            <div className={style.messages}>
                <div className={style.messages}>{props.dialogsData.messages.map(message => <MessageItem message = {message.message} />)}</div>
                <div className={style.dialogForma}>
                    <div className=""><textarea cols="30" rows="1" onChange={onMessageChange} value={props.dialogsData.messageBody}/></div>
                    <button onClick={onMessageSend}>Send</button>
                </div>

            </div>
        </div>
    );
}

export default DialogPage;