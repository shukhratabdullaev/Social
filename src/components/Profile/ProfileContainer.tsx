import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile, getUserStatus, updateUserStatus } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { ProfileType } from './MyPosts/MyPostsContainer';
import { Profile } from "./Profile";


type MapStatePropsType = {
	profile: ProfileType,
	status: string
	currentUserId: number
	isAuth: boolean
}

type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void
	getUserStatus: (userId: number) => void
	updateUserStatus: (status: string) => void
}

export type ProfilePageAPIType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<ProfilePageAPIType, ProfileType> {


	componentDidMount() {
		let userId = this.props.profile.userId
		if (!userId) {
			userId = this.props.currentUserId!
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	render() {


		return (
			<Profile {...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateUserStatus={this.props.updateUserStatus} />
		)

	}
}



let mapStateToProps = (state: AppStateType) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	currentUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});


export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	WithAuthRedirect
)(ProfileContainer)