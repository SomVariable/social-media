import React from 'react';
import style from './profileInfo.module.css'
import defaultAva from '../../../../images/defal_avatar.png'

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo}>
            <p>{props.profileInfo.name? props.profileInfo.name: 'nameless'}</p>
            <img src={props.profileInfo.avatar? props.profileInfo.avatar: defaultAva} alt="avatar"/>
        </div>
    );
};

export default ProfileInfo;