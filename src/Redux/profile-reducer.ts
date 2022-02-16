import {PostType, ProfilePageType } from "../components/Profile/MyPosts/MyPostsContainer";
import { ActionsType } from "./redux-store";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post?', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'Da da', likesCount: 11},
    ],
    messageForNewPost: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        }
        case SET_USER_PROFILE: {
    return {...state, profile: action.profile}
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


export const ChangeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

