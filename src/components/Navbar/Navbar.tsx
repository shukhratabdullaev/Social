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
                {/*<NavLink>News</NavLink>*/}
            </div>
            <div className={s.item}>
                {/*<NavLink>Music</NavLink>*/}
            </div>
            <div className={s.item}>
                {/*<NavLink>Settings</NavLink>*/}
            </div>
        </nav>
    )
}
