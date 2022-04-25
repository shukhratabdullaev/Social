import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {ProfilePagePropsType} from './MyPostsContainer';
import {Post} from './Post/Post';


export const MyPosts = (props: ProfilePagePropsType) => {


    const postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        props.addPost(props.messageForNewPost)
    }
    const changeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ChangeNewText(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={changeNewTextHandler}/>
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
