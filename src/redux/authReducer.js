const SET_STATE = "SET_STATE"

const initialState = {

}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_STATE:{
            return {...state,

            };
        }
        default:
            return state;
    }

}

export const addNewMessageCreator = (newMessageInfo) => {
    return {type: AddMessage, newMessage: newMessageInfo}
}
