import React from 'react';
import Post from "../post/Post";
import {addPostActionCreator, changeTextAriaActionCreator} from "../../../../redux/profileReducer";

function MyPosts(props) {
    const postRef = React.createRef();
    const onAddPost = ()=>{
        const newPost = {
            user: {
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2482778.png&f=1&nofb=1',
                userName: 'Kostya'
            },
            message: postRef.current.value
        }
        props.dispatch( addPostActionCreator(newPost))
    }

    const onChangeTextAria= () => {
        props.dispatch(changeTextAriaActionCreator(postRef.current.value))
    }
    return (
        <div>
            <textarea ref={postRef} cols="30" rows="1" onChange={onChangeTextAria} value={props.profileData.textarea}/>
            <button onClick = {onAddPost}>Add</button>
            {props.profileData.posts.map(post => <Post postInfo = {post}  />)}
        </div>
    );
}

export default MyPosts;