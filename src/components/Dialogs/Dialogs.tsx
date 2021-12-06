import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    changeUserMessageTextAC,
    sendUsersMessage
} from '../../redux/dialog-reducer';
import {ActionsType, DialogType, MessageType } from '../../redux/store';


export type DialogsPage = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsPage) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message key={m.id} messageContent={m.message}/>)


    const onChangeUserMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeUserMessageTextAC(e.currentTarget.value))
    }
    const addUsersMessage = () => {
        props.dispatch(sendUsersMessage(props.newMessage))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.newMessage} onChange={onChangeUserMessageHandler}></textarea>
                <button onClick={addUsersMessage}>Send</button>
            </div>
        </div>
    )
}