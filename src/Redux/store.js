import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 2, message: 'Second', likesCount: 111},
                {id: 2, message: 'Third', likesCount: 1231}
            ],
            newPostText: 'My new text'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Ky"},
                {id: 3, message: "Hello"},
                {id: 4, message: "HIy"},
                {id: 5, message: "F"},
            ],
            dialogs: [
                {id: 1, name: 'Slavik'},
                {id: 2, name: 'Slavik2'},
                {id: 3, name: 'Slavik3'},
                {id: 4, name: 'Slavik4'},
                {id: 5, name: 'Slavik5'},
                {id: 6, name: 'Slavik6'}
            ],
            newMessageBody: ''
        },
        friends: {
            friendsName: [
                {id: 1, name: 'Ira'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Kolya'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Nastia'},
                {id: 6, name: 'Ivanka'}
            ]
        }
    },
    _callSubscriber() {
        console.log('chandge state');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}

export default store;

window.state = store;