const FOLLOW = "FOLLOW-USER"
const UNFOLLOW = "UNFOLLOW-USER"
const SET_USERS = "SET-USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const initState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    limit: 10,
    isFetching: false
}

const usersReducers = (state = initState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.newUsers]
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: Math.ceil(action.totalCount/state.limit)
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.selectedPage
            }
        case SET_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export default usersReducers

export const followUserActionCreator = (userId) => {
    debugger
    return {type: FOLLOW, userId}
}

export const unfollowUserActionCreator = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsersActionCreator = (newUsers) => {
    return {type: SET_USERS, newUsers}
}

export const setTotalCountActionCreator = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
}

export const setSelectedActionCreator = (selectedPage) => {
    return {type: SET_CURRENT_PAGE, selectedPage}
}

export const setIsFetchingActionCreator = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}