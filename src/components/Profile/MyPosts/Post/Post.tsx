import React from 'react';
import { PostType } from '../MyPostsContainer';
import s from './Post.module.css'



export const Post = (props: PostType) => {
    return (
        <div>

            <div className={s.item}>
                <img src="https://i.pinimg.com/originals/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg" alt={'card'}/>
                {props.message}
            </div>
            <div><span className={s.item}>like {props.likesCount}</span></div>
        </div>
    )
}
