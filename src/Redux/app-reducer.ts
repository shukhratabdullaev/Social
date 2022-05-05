import { getAuthUserData } from "./auth-reducer";
import { ActionsType, appThunk } from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'



type AppType = {
  initialized: boolean
}



let initialState = {
  initialized: false,
}



export const appReducer = (state: AppType = initialState, action: ActionsType) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS } as const)



export const initializeApp = (): appThunk => (dispatch) => {
  const promise = dispatch(getAuthUserData())

  promise.then(() => {
    dispatch(initializedSuccess())
  })

}




