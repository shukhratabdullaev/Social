import React from 'react';
import { NavLink } from "react-router-dom";
import { UserType } from './UsersContainer';
import userPhoto from '../../assets/images/users-img.jpg'
import styles from './Users.module.css'

export type UserPropsType = {
	user: UserType
	followingInProgress: number[]
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}


export const User = ({ user, followingInProgress, unfollow, follow,   ...props }: UserPropsType) => {





	return (
		<div>



				<div>
					<NavLink to={'/profile/' + user.id}>
						<img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}
							alt="avatar" />
					</NavLink>
				</div>

		{
					<div>
						{user.followed
							? <button disabled={followingInProgress.some(id => id === user.id)}
								onClick={() => unfollow(user.id)}>Unfollow</button>
							: <button disabled={followingInProgress.some(id => id === user.id)}
								onClick={() => follow(user.id)}>Follow</button>
						}
					</div>
			}
			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<span>
					<div>{'u.location.country'}</div>
					<div>{'u.location.city'}</div>
				</span>
			</span>
		</div>
	)
}