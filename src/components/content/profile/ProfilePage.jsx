import React from 'react';
import style from './profile.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

function ProfilePage(props) {
    return (
        <div className={style.profile}>
            <ProfileInfo profileInfo = {props.store.profileInfo} setProfileInfoActionCreator = {props.store.setProfileInfoActionCreator}/>
            <MyPostsContainer />
        </div>
    );
}

export default ProfilePage;