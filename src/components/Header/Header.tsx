import React from 'react'
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {UserDataType} from "../../Redux/auth-reducer";


export const Header = (props: UserDataType) => {
    return (
        <header className={s.header}>
            <img className={s.img}
                 src="https://tinypng.com/images/social/website.jpg"
                 alt={'avatar'}
            />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <Link to={'/login'}>Login</Link>}
            </div>
        </header>
    )

}
