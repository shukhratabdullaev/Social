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

export const ProfileInfo = ({ profile, status, updateUserStatus }: ProfileInfoType) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <h3>{profile.fullName}</h3>
                <img src={profile.photos?.small} alt="ProfileAvatar" />
                <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
                <p>{profile.aboutMe}</p>
            </div>
        </div>


    )
}
