import {ActionsType, DialogsPage} from "./store"

const CHANGE_MESSAGE_TEXT = 'UPDATE-USER-MESSAGE-TEXT'
const SEND_USERS_MESSAGE = 'SEND-USERS-MESSAGE'

let initialState =  {
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

export const dialogReducer = (state: DialogsPage = initialState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            state.newMessage = action.newMessageText
            return state
        case SEND_USERS_MESSAGE:
            state.messages.push({id: 6, message: state.newMessage})
            state.newMessage = ''
            return state
        default:
            return state
    }
}


export const changeUserMessageTextAC = (userText: string) => {
    return {
        type: 'UPDATE-USER-MESSAGE-TEXT',
        newMessageText: userText
    } as const
}
export const sendUsersMessage = (messageText: string) => {
    return {
        type: 'SEND-USERS-MESSAGE',
        messageText: messageText
    } as const
}