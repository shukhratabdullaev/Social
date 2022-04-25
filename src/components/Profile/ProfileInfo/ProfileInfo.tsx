import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../MyPosts/MyPostsContainer";


type ProfileInfoType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                  src={props.profile.photos?.large ||
                  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/" +
                  "jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}
                    alt={'img'}
                />
            </div>
            <div className={s.descriptionBlock}>
              <h3>{props.profile.fullName}</h3>
                <img src={props.profile.photos?.small} alt="ProfileAvatar"/>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>


    )
}
