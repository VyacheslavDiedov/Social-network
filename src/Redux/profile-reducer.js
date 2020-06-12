import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 2, message: 'Second', likesCount: 111},
        {id: 2, message: 'Third', likesCount: 1231}
    ],
    newPostText: 'My new text',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            };
        }
            case SET_USERS_PROFILE : {
            return {
                ...state,
                profile: action.profile
            };
        }
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST} );
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatuse = (status) => ({type: SET_STATUS, status});

//thunk
export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatuse(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatuse(status));
        }
    });
};

export default profileReducer;