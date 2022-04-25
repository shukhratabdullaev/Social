import React from 'react';
import styles from "./users.module.css";
import usersPhoto from "../../assets/images/users-img.jpg";
import {UserType} from './UsersContainer';
import {NavLink} from "react-router-dom";


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

export const Users = (props: UsersPropsType) => {


	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)


	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <div>
		<div>

			{pages.map((page, i) => {
				return <span key={i} className={props.currentPage === page ? styles.selectedPage : ''}
				             onClick={() => {
					             props.onPageChanged(page)
				             }}>{page}</span>
			})}


			<span>1</span>
			<span className={styles.selectedPage}>2</span>
			<span>3</span>
			<span>4</span>
			<span>5</span>
		</div>
		{
			props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}
                         alt="avatar"
                    />
                        </NavLink>
                </div>
                <div>
                    {
	                    u.followed
		                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
		                              onClick={() => props.unfollow(u.id)}>
			                    Unfollow</button>
		                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
		                              onClick={() => props.follow(u.id)}>
			                    Follow</button>
                    }

                </div>
            </span>
					<span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
				</div>
			)}
	</div>
}