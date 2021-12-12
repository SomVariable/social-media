const FOLLOW = "FOLLOW-USER"
const UNFOLLOW = "UNFOLLOW-USER"
const SET_USERS = "SET-USERS"

const initState = {
    users: [
        {id: 1, fullName: 'Kostya Kostya', follow: true, status: "som Status"},
        {id: 2, fullName: 'Vlad', follow: false, status: "som Status__2"},
    ]
}

const usersReducers = (state = initState, action) => {
    switch (action.type){
        case FOLLOW: {
            const newState = {...state}
            newState.users.map(user => {
                let newUser = user
                if(user.id === action.id) newUser = {...user, follow: true}
                return newUser
            })
            return newState
        }
        case UNFOLLOW:{
            const newState = {...state}
            newState.users.map(user => {
                let newUser = user
                if(user.id === action.id) newUser = {...user, follow: false}
                return newUser
            })
            return newState
        }

        case SET_USERS:
            return state
        default:
            return state
    }
}

export default usersReducers

export const followUserActionCreator = (userId) => {
    return {type: FOLLOW, userId: userId}
}

export const unfollowUserActionCreator = (userId) => {
    return {type: UNFOLLOW, userId: userId}
}

export const setUsersActionCreator = () => {

}