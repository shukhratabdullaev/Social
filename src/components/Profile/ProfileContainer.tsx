import React from 'react';
import {ProfileType} from './MyPosts/MyPostsContainer';
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from 'react-redux';
import {getUserProfile} from "../../Redux/profile-reducer";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from 'redux';


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
	WithAuthRedirect
)(ProfileContainer)