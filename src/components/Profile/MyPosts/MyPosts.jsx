import React, {useLayoutEffect} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let postElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let NewPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);

    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={ NewPostElement }
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;