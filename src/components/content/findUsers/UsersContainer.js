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
import servData from "../../../servData/servData";

class UsersApi extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        this.props.setIsFetchingActionCreator(true)
        axios.get(`https://gorest.co.in/public/v1/users?page=${this.props.currentPage}`).then(response => {
            const updatedData = response.data.data.map(u => {
                const randomIntForGeneration = Math.floor(Math.random()*10)
                const follow = randomIntForGeneration > 5
                const city = servData.cityes.slice(randomIntForGeneration, randomIntForGeneration+1).join('')
                return {
                    ...u,
                    follow: follow,
                    city: city
                }
            })
            this.props.setUsersActionCreator(updatedData)
            this.props.setTotalCountActionCreator(response.data.meta.pagination.total)
            this.props.setIsFetchingActionCreator(false)
        })
    }

    onPage = (page) => {
        this.props.setSelectedActionCreator(page)
        this.props.setIsFetchingActionCreator(true)
        axios.get(`https://gorest.co.in/public/v1/users?page=${page}`).then(response => {
            const updatedData = response.data.data.map(u => {
                const randomIntForGeneration = Math.floor(Math.random()*10)
                const follow = randomIntForGeneration > 5
                const city = servData.cityes.slice(randomIntForGeneration, randomIntForGeneration+1).join('')
                return {
                    ...u,
                    follow: follow,
                    city: city
                }
            })
            this.props.setUsersActionCreator(updatedData)
            this.props.setTotalCountActionCreator(response.data.meta.pagination.total)
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