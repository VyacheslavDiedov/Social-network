import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormControls/FormControls";

const MyPosts = React.memo((props) => {

    let postElements = [...props.posts]
        .reverse().map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let NewPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit = {onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component= {Textarea} name= "newPostText" validate = {[required, maxLength10]}
                       placeholder={"Post message"}>

                </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


export default MyPosts;