import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export type PostType = {
    id: number
    message: string
    likesCount: number
}

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
