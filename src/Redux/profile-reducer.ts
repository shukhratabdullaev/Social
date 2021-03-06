import { Dispatch } from "redux";
import { profileAPI } from "../api/api";
import { ProfilePageType, ProfileType } from "../components/Profile/MyPosts/MyPostsContainer";
import { ActionsType } from "./redux-store";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post?', likesCount: 11 },
        { id: 3, message: 'blabla', likesCount: 11 },
        { id: 4, message: 'Da da', likesCount: 11 },
    ],
    profile: {
        fullName: '',
        userId: null,
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
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
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
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId } as const)

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {

    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))

}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {


    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
    } catch(error) {
        alert('some error occurred
        ')
    }


}




