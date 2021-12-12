import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../../../redux/usersReducers";

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        followUserActionCreator: (user) => {
            dispatch(followUserActionCreator(user))
        },
        unfollowUserActionCreator: (user) => {
            dispatch(unfollowUserActionCreator(user))
        },
        setUsersActionCreator: () => {

        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;