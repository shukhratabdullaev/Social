import React from 'react';
import { Link } from "react-router-dom";
import s from './Header.module.css';
import { UserDataPropsType } from './HeaderContainer';


export const Header = (props: UserDataPropsType) => {
  return (
    <header className={s.header}>
      <Link to={'/social'}><img className={s.img}
        src="https://tinypng.com/images/social/website.jpg"
        alt={'avatar'}
      /></Link>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <Link to={'/login'}>Login</Link>}
      </div>
    </header>
  )

}
