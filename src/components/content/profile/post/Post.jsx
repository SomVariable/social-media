import React from 'react';
import style from './post.module.css'
function Post(props) {
    return (
        <div className={style.post}>
            <img src={props.postInfo.img} alt="avatar"/>
            <h3>{props.postInfo.userName}</h3>
            <p>{props.postInfo.message}</p>
            <p>{props.postInfo.likes + ' likes'}</p>
        </div>
    );
}

export default Post;