import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC } from '../../../Redux/profile-reducer';
import { AppStateType } from '../../../Redux/redux-store';
import { MyPosts } from './MyPosts';


export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
	return {
		posts: state.profilePage.posts,
		profile: state.profilePage.profile,
		status: state.profilePage.status
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		addPost: (postMessage: string) => {
			dispatch(addPostAC(postMessage))
		}
	}
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(MyPosts)


export type ProfileType = {
	fullName: string
	// uniqueUrlName?: string
	// followed: boolean
	userId: number
	photos?: {
		small: string
		large: string
	}
	lookingForAJobDescription?: string
	aboutMe?: string
}


export type PostType = {
	id: number
	message: string
	likesCount: number
}

export type ProfilePageType = {
	posts: Array<PostType>
	profile: ProfileType
	status: string
}
type MapStateToPropsType = ProfilePageType
type MapDispatchToPropsType = {
	addPost: (postMessage: string) => void
}