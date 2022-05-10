import React from 'react';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
import { UserType } from './UsersContainer';

export type UsersPropsType = {
	users: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	followingInProgress: number[]
}


export const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }: UsersPropsType) => {

	let pagesCount = Math.ceil(totalUsersCount / pageSize)


	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}


	return <div>
		<Paginator
			currentPage={currentPage}
			onPageChanged={onPageChanged}
			totalUsersCount={totalUsersCount}
			pageSize={pageSize}
		/>
		{
			users.map(u => <User
				key={u.id}
				user={u}
				followingInProgress={props.followingInProgress}
				follow={props.follow}
				unfollow={props.unfollow}
			/>
			)}
	</div>
}