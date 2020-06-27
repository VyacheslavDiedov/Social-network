import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReduser } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReduser,
            app: appReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

export default store;