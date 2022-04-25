import React from 'react';
import {ProfileType} from './MyPosts/MyPostsContainer';
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from 'react-redux';
import {getUserProfile} from "../../Redux/profile-reducer";
import {Navigate} from 'react-router-dom';


type MapStatePropsType = {
	profile: ProfileType,
	isAuth: boolean
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


		if (!this.props.isAuth) return <Navigate to={'/login'}/>;


		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)

	}
}


let mapStateToProps = (state: AppStateType) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
});


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
	{getUserProfile})(ProfileContainer)