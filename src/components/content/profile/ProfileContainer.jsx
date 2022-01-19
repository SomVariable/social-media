import React, {Component} from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {setProfileInfoActionCreator} from "../../../redux/profileReducer";
import * as axios from "axios";
import {useLocation} from "react-router-dom";


function useWithRouter(props) {
    const location = useLocation()
    return <ProfileContainer {...props} location = {location}></ProfileContainer>
}


class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://ancient-lake-62401.herokuapp.com/api/users?user=4`).then(response => {
            this.props.setProfileInfoActionCreator(response.data.data.user)
        })
    }

    render() {
        return (
            <ProfilePage store = {{...this.props}}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profileState.profileInfo,
    }
}



export default connect(mapStateToProps, {setProfileInfoActionCreator})(useWithRouter);