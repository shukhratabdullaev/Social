import { Dispatch } from "redux";
import { authApi } from "../api/api";
import { appThunk } from "./redux-store";

const SET_USER_DATA = 'auth/SET_USER_DATA';




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

export const authReducer = (state: UserDataType = initialState, action: authActionType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}


export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => (
  {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
  }
)



export const getAuthUserData = () => async (dispatch: Dispatch) => {
  const response = await authApi.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}



export const login = (email: string, password: string, rememberMe: boolean): appThunk => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    alert(message)
  }
}
export const logout = (): appThunk => async (dispatch) => {
  const response = await authApi.logout()
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  }
}

