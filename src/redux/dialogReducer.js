const AddMessage = "ADD_MESSAGE";
const ChangeMessage= 'CHANGE_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Kostya'}
    ],
    messages: [
        {id: 1, message: 'Vd'},
        {id: 2, message: 'Ktya'}
    ],
    messageBody: ''
}

export const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case AddMessage:{
            return {...state,
                    dialogs: [...state.dialogs, {id: action.newMessage.id, name: action.newMessage.userName}],
                    messages: [...state.messages, {id: action.newMessage.id, message: state.messageBody}],
                    messageBody: ''
            };
        }
        case ChangeMessage:{
            return {...state, messageBody: action.newWord};
        }
        default:
            return state;
    }

}

export const addNewMessageCreator = (newMessageInfo) => {
    return {type: AddMessage, newMessage: newMessageInfo}
}

export const changeMessageCreator = (newWord) => {
    return  {type: ChangeMessage, newWord: newWord}
}