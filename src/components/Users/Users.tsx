import React from 'react';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
import { UserType } from './UsersContainer';

export type UsersPropsType = {
	users: Array<UserType>
	pageSize: number
	totalItemsCount: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	followingInProgress: number[]
}


export const Users = ({ currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props }: UsersPropsType) => {

	let pagesCount = Math.ceil(totalItemsCount / pageSize)


	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}


	return <div>
		<Paginator
			currentPage={currentPage}
			onPageChanged={onPageChanged}
			totalItemsCount={totalItemsCount}
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