import React from 'react';
import style from './profileInfo.module.css'
import defaultAva from '../../../../images/defal_avatar.png'

const ProfileInfo = (props) => {
    debugger
    return (
        <div className={style.profileInfo}>
            <img src={props.profileInfo.avatar? props.profileInfo.avatar: defaultAva} alt="avatar"/>
        </div>
    );
};

export default ProfileInfo;