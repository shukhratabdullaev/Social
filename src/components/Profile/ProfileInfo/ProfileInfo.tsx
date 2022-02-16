import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


type ProfileInfoType = {
    profile: any
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt={'img'}
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Profile"/>
                ava + description
            </div>
        </div>


    )
}
