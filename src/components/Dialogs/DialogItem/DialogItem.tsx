import React from 'react'
import {NavLink} from 'react-router-dom'
import { DialogType } from '../../../Redux/state'
import s from './../Dialogs.module.css'



export const DialogItem = (props: DialogType ) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}




