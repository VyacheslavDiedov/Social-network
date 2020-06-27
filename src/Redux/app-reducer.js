import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {getUsersProfile} from "./profile-reducer";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialize: true
            };
        default: return state;
    }
}

export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializeSuccess());
    })

}

export default appReducer;