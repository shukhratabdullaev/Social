import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { ProfileType } from "../MyPosts/MyPostsContainer";
import ProfileStatus from './ProfileStatus';


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <h3>{props.profile.fullName}</h3>
                <img src={props.profile.photos?.small} alt="ProfileAvatar" />
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>


    )
}
