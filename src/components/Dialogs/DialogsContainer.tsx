import {changeUserMessageTextAC, sendUsersMessageAC} from '../../Redux/dialog-reducer';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../Redux/redux-store';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import { ComponentType } from 'react';


const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		onChangeUserMessageHandler: (userText: string) => {
			dispatch(changeUserMessageTextAC(userText))
		},
		addUsersMessage: (messageText: string) => {
			dispatch(sendUsersMessageAC(messageText))
		}
	}
}


export default compose<ComponentType>(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRedirect
)(Dialogs)


export type DialogsPageType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
	newMessage: string
}
export type MessageType = {
	id: number
	message: string
}
export type DialogType = {
	id: number
	name: string
}

type MapStateToPropsType = {
	dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
	onChangeUserMessageHandler: (userText: string) => void
	addUsersMessage: (messageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
