import { Dispatch } from "redux"
import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'




export type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type authActionType = ReturnType<typeof setAuthUserData>

export const authReducer  = (state: UserDataType = initialState, action: authActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me()
      .then(response => {
          if (response.data.resultCode === 0) {
              let {id, email, login} = response.data.data
              dispatch(setAuthUserData(id, email, login))
          }
      });
}


export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}})