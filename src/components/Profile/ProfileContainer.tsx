import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { ProfileType } from './MyPosts/MyPostsContainer';
import { Profile } from "./Profile";


type MapStatePropsType = {
	profile: ProfileType,
}

type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void
}

export type ProfilePageAPIType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<ProfilePageAPIType, ProfileType> {


	componentDidMount() {
		let userId = this.props.profile.userId
		if (!userId) {
			userId = 2
		}
		this.props.getUserProfile(userId)
	}

	render() {


		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)

	}
}



let mapStateToProps = (state: AppStateType) => ({
	profile: state.profilePage.profile,
});


export default compose<React.ComponentType>(
	connect(mapStateToProps, {getUserProfile}),
)(ProfileContainer)