import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addPostAC, ChangeNewTextAC} from '../../../Redux/profile-reducer';
import {AppStateType} from '../../../Redux/redux-store';
import {MyPosts} from './MyPosts';


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: any
}
type MapStateToPropsType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: any
}
type MapDispatchToPropsType = {
    ChangeNewText: (newText: string) => void
    addPost: (postMessage: string) => void
}
export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        ChangeNewText: (newText: string) => {
            dispatch(ChangeNewTextAC(newText))
        },
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        }
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
