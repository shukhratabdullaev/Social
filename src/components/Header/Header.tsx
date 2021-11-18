import React from 'react'
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img}
                src="https://tinypng.com/images/social/website.jpg"/>
        </header>
    )

}
