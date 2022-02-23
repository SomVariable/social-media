import React, {Component} from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {setProfileInfoActionCreator} from "../../../redux/profileReducer";
import * as axios from "axios";
import {useParams} from "react-router-dom";


function useWithRouter(props) {
    const params = useParams()
    return <ProfileContainer {...props} params = {params}></ProfileContainer>
}


class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const userId = this.props.params.userId || '61dee631bede3f956b864fea';
        axios.get(`https://ancient-lake-62401.herokuapp.com/api/users?userId=${userId}`).then(response => {
            console.log(response)
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