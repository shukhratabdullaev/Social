import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} messageContent={m.message}/>)


    const onChangeUserMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeUserMessageTextAC(e.currentTarget.value))
        props.onChangeUserMessageHandler(e.currentTarget.value)
    }
    const addUsersMessage = () => {
        // props.dispatch(sendUsersMessage(props.newMessage))
        props.addUsersMessage(props.dialogsPage.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.dialogsPage.newMessage} onChange={onChangeUserMessageHandler}></textarea>
                <button onClick={addUsersMessage}>Send</button>
            </div>
        </div>
    )
}