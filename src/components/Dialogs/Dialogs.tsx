import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { DialogsPageType } from './DialogsContainer';
import { Message } from "./Message/Message";


export const Dialogs = (props: DialogsPropsType) => {

	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)

	let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} messageContent={m.message} />)


	// if (!props.isAuth) {
	// 	return <Navigate to={'/login'} />
	// }

	const addNewMessage = (values: any) => {
		props.addUsersMessage(values.newMessageBody)
	}
	
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	)
}


const AddMessageForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}


const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)





type DialogsPropsType = {
	dialogsPage: DialogsPageType
	isAuth: boolean
	addUsersMessage: (messageText: string) => void
}