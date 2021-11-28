const AddData = "ADD_DATA";
const ChangeTextAria = 'CHANGE_TEXT_ARIA';

export const profileReducer = (state, action) => {
    switch (action.type){
        case AddData:
            const newPost = {
                id:  new Date().getMinutes().toString() + new Date().getSeconds() + new Date().getDay() - 0,
                img: action.userInfo.user.img,
                userName: action.userInfo.user.userName,
                message: state.textarea,
                likes: 0
            }
            state.posts.push(newPost)
            state.textarea = ''
            return state;
        case ChangeTextAria:
            state.textarea = action.newWord;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => {
    return {type: AddData, userInfo: newPost}
}

export const changeTextAriaActionCreator = (newWord) => {
    return  {type: ChangeTextAria, newWord: newWord}
}