import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import { ProfilePagePropsType } from './MyPostsContainer';
import { Post } from './Post/Post';


export const MyPosts = (props: ProfilePagePropsType) => {


    const postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)


    const addPost = (values: any) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)