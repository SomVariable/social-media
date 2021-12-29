import React from 'react';
import style from './user.module.css'
import defaultAvatar from "../../../../images/defal_avatar.png"
import Preloader from "../../../../common/Preloader";
const User = props => {
    return (
        <>
            {props.isFetching? <Preloader/>:
            <div>
                <div>
                    <img className={style.img} src = {props.user.photo? props.user.photo: defaultAvatar} />
                    {props.user.name}
                </div>
                <div> {`email: ${props.user.email}`} </div>
                <div> {`status: ${props.user.status}`} </div>
                <div> {`City: ${props.user.city}`} </div>
                {props.user.follow? <button onClick={() => props.unfollowUser(props.user.id)}>Unfollow</button>: <button onClick={() => props.followUser(props.user.id)}>Follow</button>}
            </div>
            }
</> );
};

export default User;