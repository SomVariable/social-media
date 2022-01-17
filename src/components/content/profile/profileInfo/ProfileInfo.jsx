import React from 'react';
import style from './profileInfo.module.css'
import defaultAva from '../../../../images/defal_avatar.png'

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo}>

            <img src={props.profileInfo.ava? props.profileInfo.ava: defaultAva} alt="avatar"/>
        </div>
    );
};

export default ProfileInfo;