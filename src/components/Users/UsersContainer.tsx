import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {follow, getUsersTC, setCurrentPage, unfollow} from '../../Redux/users-reducer';
import React from 'react';
import {Users, UsersPropsType} from './Users';
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from 'redux';

class UsersContainer extends React.Component<UsersAPIComponentPropsType, UsersPropsType> {


	componentDidMount() {
		this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsersTC(pageNumber, this.props.pageSize)
	}

	render() {


		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
		getUsersTC: state.usersPage.getUsers
	}
}


export default compose<React.ComponentType>(
	connect(mapStateToProps, {follow: follow, unfollow: unfollow, setCurrentPage, getUsersTC}),
	WithAuthRedirect
)(UsersContainer)


export type UserType = {
	id: number
	photos: any
	name: string
	followed: boolean
	status: string
	location: { city: string, country: string }
}

export type UsersType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]
	getUsers?: (currentPage: number, pageSize: number) => void
}

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setCurrentPage: (pageNumber: number) => void
	getUsersTC: (currentPage: number, pageSize: number) => void
}

export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

