const AddData = "ADD_DATA";
const ChangeTextAria = 'CHANGE_TEXT_ARIA';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

const initialState = {
    profileInfo: {},
    posts: [
        {id: 1, img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2482751.jpg&f=1&nofb=1',userName: 'Vlad', message: 'hello world', likes: 0},
        {id: 2, img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2098631.jpg&f=1&nofb=1',userName: 'Misa', message: 'I am piss of shit', likes: 999},
    ],
    textarea: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){

        case AddData:{
            const newPost = {
                id:  new Date().getMinutes().toString() + new Date().getSeconds() + new Date().getDay() - 0,
                img: action.userInfo.user.img,
                userName: action.userInfo.user.userName,
                message: state.textarea,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], textarea: ''};
        }
        case ChangeTextAria:{
            return {...state, textarea: action.newWord};
        }
        case SET_PROFILE_INFO:{
            return {...state, profileInfo: action.newProfile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => {
    return {type: AddData, userInfo: newPost}
}

export const changeTextAriaActionCreator = (newWord) => {
    return  {type: ChangeTextAria, newWord}
}

export const setProfileInfoActionCreator = (newProfile) => {
    return  {type: SET_PROFILE_INFO, newProfile}
}