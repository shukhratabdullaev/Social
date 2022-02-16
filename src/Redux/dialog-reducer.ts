import {DialogsPageType} from "../components/Dialogs/DialogsContainer"
import { ActionsType } from "./redux-store"

const CHANGE_MESSAGE_TEXT = 'UPDATE-USER-MESSAGE-TEXT'
const SEND_USERS_MESSAGE = 'SEND-USERS-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessage: ''
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {


    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessageText
            }
        case SEND_USERS_MESSAGE:
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 6, message: state.newMessage}]
            }
        default:
            return state
    }
}


export const changeUserMessageTextAC = (userText: string) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        newMessageText: userText
    } as const
}
export const sendUsersMessageAC = (messageText: string) => {
    return {
        type: SEND_USERS_MESSAGE,
        messageText: messageText
    } as const
}