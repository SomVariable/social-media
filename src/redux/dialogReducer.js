const AddMessage = "ADD_MESSAGE";
const ChangeMessage= 'CHANGE_MESSAGE';

export const dialogReducer = (state, action) => {
    switch (action.type){
        case AddMessage:
            state.dialogs.push({id: action.newMessage.id, name: action.newMessage.userName})
            state.messages.push({id: action.newMessage.id, message: state.messageBody})
            state.messageBody = ''
            return state;
        case ChangeMessage:
            state.messageBody = action.newWord;
            return state;
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