import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css'


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={s.item}>
                <Link to='/dialogs'>Messages</Link>
            </div>
            <div className={s.item}>
                <Link to={'/'}>News</Link>
            </div>
            <div className={s.item}>
                <Link to={'/'}>Music</Link>
            </div>
            <div className={s.item}>
                <Link to={'/'}>Settings</Link>
            </div>
        </nav>
    )
}
