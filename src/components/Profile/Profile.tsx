import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';



export type ProfilePageType = {
    profile: any
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>


    )
}
