import React from 'react';
import {ActionsType, PostType} from '../../redux/state';
import {MyPosts} from './MyPosts/MyPosts';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export type ProfilePageType = {
    message: string
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts message={props.message}
                     posts={props.posts}
                     dispatch={props.dispatch}
            />
        </div>


    )
}
