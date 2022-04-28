import { applyMiddleware, combineReducers, createStore } from "redux";
import { changeUserMessageTextAC, dialogReducer, sendUsersMessageAC } from "./dialog-reducer";
import { addPostAC, ChangeNewTextAC, profileReducer, setUserStatus, setUserProfile } from "./profile-reducer";
import { authReducer } from "./auth-reducer";
import {
	followSuccess,
	setCurrentPage,
	setUsers,
	setUserTotalCount, toggleFollowingProgress,
	toggleIsFetching,
	unfollowSuccess,
	usersReducer
} from "./users-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	usersPage: usersReducer,
	auth: authReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))


export type ActionsType =
	| ReturnType<typeof addPostAC>
	| ReturnType<typeof ChangeNewTextAC>
	| ReturnType<typeof changeUserMessageTextAC>
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

export type AppStateType = ReturnType<typeof rootReducer>




