import React from 'react';
import {addPostActionCreator, changeTextAriaActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        profileState: state.profileState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        },
        onChangeTextAria: text => {
            dispatch(changeTextAriaActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;