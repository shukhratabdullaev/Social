import {DialogsPageType} from "../components/Dialogs/DialogsContainer"
import { ActionsType } from "./redux-store"

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
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {


    switch (action.type) {
        case SEND_USERS_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.messageText}]
            }
        default:
            return state
    }
}


export const sendUsersMessageAC = (messageText: string) => {
    return {
        type: SEND_USERS_MESSAGE,
        messageText: messageText
    } as const
}