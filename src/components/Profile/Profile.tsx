import React from 'react';
import { PostType } from '../../Redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfilePageType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>


    )
}
