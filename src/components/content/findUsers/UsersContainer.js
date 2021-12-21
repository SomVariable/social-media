import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserActionCreator, setSelectedActionCreator, setsELECTEDActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowUserActionCreator
} from "../../../redux/usersReducers";

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        currentPage: state.usersState.currentPage,
        totalCount: state.usersState.totalCount,
        limit: state.usersState.limit
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followUserActionCreator: (userId) => {
            dispatch(followUserActionCreator(userId))
        },
        unfollowUserActionCreator: (userId) => {
            dispatch(unfollowUserActionCreator(userId))
        },
        setUsersActionCreator: (newUsers) => {
            dispatch(setUsersActionCreator(newUsers))
        },
        setTotalCountActionCreator: (totalCount) => {
            dispatch(setTotalCountActionCreator((totalCount)))
        },
        setSelectedActionCreator: (selectedPage) => {
            dispatch(setSelectedActionCreator(selectedPage))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;