import React, {LegacyRef} from 'react';
import { ProfilePageType } from '../Profile';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';


export const MyPosts = (props: ProfilePageType) => {


    const postsElements =
        props.posts.map(p => <Post id={p.id}  message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
