import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';
import { follow, requestUsersTC, setCurrentPage, unfollow } from '../../Redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../Redux/users-selectors';
import Preloader from "../common/Preloader/Preloader";
import { Users } from './Users';

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {


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
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}


export default compose<React.ComponentType>(
	connect(mapStateToProps, {follow: follow, unfollow: unfollow, setCurrentPage, getUsersTC: requestUsersTC}),
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

