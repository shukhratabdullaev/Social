import { Dispatch } from "redux";
import { profileAPI } from "../api/api";
import { ProfilePageType, ProfileType } from "../components/Profile/MyPosts/MyPostsContainer";
import { ActionsType } from "./redux-store";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post?', likesCount: 11 },
        { id: 3, message: 'blabla', likesCount: 11 },
        { id: 4, message: 'Da da', likesCount: 11 },
    ],
    profile: {
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        },
        lookingForAJobDescription: '',
        aboutMe: ''
    },
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                {
                    id: 5,
                    message: action.postMessage,
                    likesCount: 0
                }],
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })

}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {

    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0)
                dispatch(setUserStatus(status))
        })

}




