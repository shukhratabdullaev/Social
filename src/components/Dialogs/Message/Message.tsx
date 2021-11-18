import React from 'react'
import s from './../Dialogs.module.css'

type MessageType = {
    messageContent: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.messageContent}</div>
    );
}