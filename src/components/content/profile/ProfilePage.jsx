import React from 'react';
import style from './profile.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

function ProfilePage(props) {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fwallpaper.wiki-Cool-nature-backgrounds-hd-resolution-nature-background-image-hd.jpg&f=1&nofb=1"
                alt="background"/>
            <MyPostsContainer />
        </div>
    );
}

export default ProfilePage;