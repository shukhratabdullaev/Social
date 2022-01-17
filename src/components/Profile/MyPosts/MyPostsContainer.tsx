import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addPostAC, ChangeNewTextAC} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';
import {PostType} from '../../../redux/store';
import {MyPosts} from './MyPosts';

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}
type MapStateToPropsType = {
    posts: Array<PostType>
    messageForNewPost: string
}
type MapDispatchToPropsType = {
    ChangeNewText: (newText: string) => void
    addPost: (postMessage: string) => void
}
export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
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
