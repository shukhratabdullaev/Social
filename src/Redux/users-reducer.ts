import { UsersType, UserType } from "../components/Users/UsersContainer"
import { ActionsType } from "./redux-store"
import { usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { updateObjectInArray } from "../utils/objects-helpers/objects-helpers";



const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			}

		case SET_USERS: {
			return { ...state, users: [...action.users] }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.totalUsersCount }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetch
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state
	}
}

export const followSuccess = (userId: number) => {
	return {
		type: FOLLOW,
		userId
	} as const
}
export const unFollowSuccess = (userId: number) => {
	return {
		type: UNFOLLOW,
		userId
	} as const
}
export const setUsers = (users: Array<UserType>) => {
	return {
		type: SET_USERS,
		users: users
	} as const
}
export const setCurrentPage = (page: number) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage: page
	} as const
}
export const setUserTotalCount = (totalUsersCount: number) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalUsersCount
	} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	} as const
}
export const toggleFollowingProgress = (isFetch: boolean, userId: number) => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetch,
		userId
	} as const
}

export const requestUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
	dispatch(toggleIsFetching(true))
	dispatch(setCurrentPage(page))
	const data = await usersAPI.getUsers(page, pageSize);
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setUserTotalCount(data.totalUsersCount))
}


export const follow = (userId: number) => async (dispatch: Dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.follow(userId), followSuccess)
}
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.unFollow(userId), unFollowSuccess)
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: Function) => {

	dispatch(toggleFollowingProgress(true, userId));
	const response = await apiMethod
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}







