import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { sendUsersMessageAC } from '../../Redux/dialog-reducer';
import { AppStateType } from '../../Redux/redux-store';
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import { Dialogs } from './Dialogs';


const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
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
	addUsersMessage: (messageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
