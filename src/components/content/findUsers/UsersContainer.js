import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserActionCreator,
    setIsFetchingActionCreator,
    setSelectedActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowUserActionCreator
} from "../../../redux/usersReducers";
import * as axios from "axios";

class UsersApi extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        this.props.setIsFetchingActionCreator(true)
        axios.get(`https://ancient-lake-62401.herokuapp.com/api/users?page=${this.props.currentPage}`).then(response => {
            this.props.setUsersActionCreator(response.data.data.users)
            this.props.setTotalCountActionCreator(response.data.meta.count)
            this.props.setIsFetchingActionCreator(false)
        })
    }

    onPage = (page) => {
        this.props.setSelectedActionCreator(page)
        this.props.setIsFetchingActionCreator(true)
        axios.get(`https://ancient-lake-62401.herokuapp.com/api/users?page=${page}`).then(response => {
            this.props.setUsersActionCreator(response.data.data.users)
            this.props.setTotalCountActionCreator(response.data.meta.count)
            this.props.setIsFetchingActionCreator(false)
        })
    }

    render(){
        return <Users
            state = {{
                currentPage: this.props.currentPage,
                totalCount : this.props.totalCount,
                users: this.props.users,
                limit: this.props.limit,
                isFetching: this.props.isFetching
            }}
            dispatch = {{
                followUserActionCreator: this.props.followUserActionCreator,
                unfollowUserActionCreator: this.props.unfollowUserActionCreator,
                onPage: this.onPage
            }
            }
        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        currentPage: state.usersState.currentPage,
        totalCount: state.usersState.totalCount,
        limit: state.usersState.limit,
        isFetching: state.usersState.isFetching
    }
}


const UsersContainer = connect(mapStateToProps, {
    followUserActionCreator,
    unfollowUserActionCreator,
    setUsersActionCreator,
    setTotalCountActionCreator,
    setSelectedActionCreator,
    setIsFetchingActionCreator
})(UsersApi)


export default UsersContainer;