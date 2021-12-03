import React, {LegacyRef} from 'react';
import {ChangeEvent} from 'react';
import {addPostAC, ChangeNewTextAC} from '../../../redux/state';
import {ProfilePageType} from '../Profile';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';


export const MyPosts = (props: ProfilePageType) => {


    const postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        props.dispatch(addPostAC(props.message))
    }
    const changeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextAC(e.currentTarget.value))
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea value={props.message} onChange={changeNewTextHandler}></textarea>
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
