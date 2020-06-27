import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 2, message: 'Second', likesCount: 111},
        {id: 2, message: 'Third', likesCount: 1231}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("Hello world");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

it('The message of new posts should be correct', () => {
    let action = addPostActionCreator("Hello world");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("Hello world");
});

it('after delete length of posts should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it(`after delete length of posts shouldn't be changed if id is incorrect`, () => {
    let action = deletePost(20);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});


