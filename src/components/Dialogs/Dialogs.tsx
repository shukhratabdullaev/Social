import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from './DialogsContainer';
import {Navigate} from 'react-router-dom';


type DialogsPropsType = {
	dialogsPage: DialogsPageType
	isAuth: boolean
	onChangeUserMessageHandler: (userText: string) => void
	addUsersMessage: (messageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {


	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

	let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} messageContent={m.message}/>)


	const onChangeUserMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeUserMessageHandler(e.currentTarget.value)
	}
	const addUsersMessage = () => {
		props.addUsersMessage(props.dialogsPage.newMessage)
	}


	if (!props.isAuth) {
		return <Navigate to={'/login'}/>
	}


	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<textarea value={props.dialogsPage.newMessage} onChange={onChangeUserMessageHandler}/>
				<button onClick={addUsersMessage}>Send</button>
			</div>
		</div>
	)
}