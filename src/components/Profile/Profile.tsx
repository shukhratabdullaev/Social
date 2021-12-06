import React from 'react';
import {ActionsType, PostType } from '../../redux/store';
import { MyPosts } from './MyPosts/MyPosts';
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
