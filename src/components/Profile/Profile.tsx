import React from 'react';
import {ActionsType, PostType} from '../../redux/store';
import {MyPosts} from './MyPosts/MyPosts';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export type ProfilePageType = {
    message: string
    posts: Array<PostType>
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>


    )
}
