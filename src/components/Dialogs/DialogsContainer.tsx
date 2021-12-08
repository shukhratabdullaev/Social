import {changeUserMessageTextAC, sendUsersMessageAC} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';



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

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeUserMessageHandler: (userText: string) => {
            dispatch(changeUserMessageTextAC(userText))
        },
        addUsersMessage: (messageText: string) => {
            dispatch(sendUsersMessageAC(messageText))
        }
    }
}


export const DialogsContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
