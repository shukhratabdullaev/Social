import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk, { ThunkAction } from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { dialogReducer, sendUsersMessageAC } from "./dialog-reducer";
import { addPostAC, profileReducer, setUserProfile, setUserStatus } from "./profile-reducer";
import {
	followSuccess,
	setCurrentPage,
	setUsers,
	setUserTotalCount, toggleFollowingProgress,
	toggleIsFetching,
	unfollowSuccess,
	usersReducer
} from "./users-reducer";



let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))


// export const useAppDispatch = () => 
// useDispatch<ThunkDispatch<AppStateType, unknown, ActionsType>>();

export type appThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType =
	| ReturnType<typeof addPostAC>
	| ReturnType<typeof sendUsersMessageAC>
	| ReturnType<typeof followSuccess>
	| ReturnType<typeof unfollowSuccess>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setUserTotalCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof toggleFollowingProgress>
	| ReturnType<typeof setUserStatus>




