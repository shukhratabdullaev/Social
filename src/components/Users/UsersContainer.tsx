import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../src/Redux/redux-store';
import {followAC, setUsersAC, unfollowAC} from '../../../src/Redux/users-reducer';
import {Users} from './Users';



export type UserType = {
    id: number
    photoURL: string
    fullName: string
    followed: boolean
    status: string
    location: { city: string, country: string }
}

export type UsersType = {
    users: Array<UserType>
}

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}


export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)
