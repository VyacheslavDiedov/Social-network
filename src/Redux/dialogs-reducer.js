const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: body
                }],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody} );

export default dialogsReducer;