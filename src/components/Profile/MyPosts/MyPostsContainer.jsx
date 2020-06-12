import React from 'react';
import s from './MyPosts.module.css';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;