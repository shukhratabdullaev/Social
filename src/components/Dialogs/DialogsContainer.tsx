import {changeUserMessageTextAC, sendUsersMessageAC} from '../../Redux/dialog-reducer';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';


const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
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

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(Dialogs);


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
	isAuth: boolean
}

type MapDispatchToPropsType = {
	onChangeUserMessageHandler: (userText: string) => void
	addUsersMessage: (messageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
