import React from 'react';
import Post from "../post/Post";

function MyPosts(props) {
    const postRef = React.createRef();
    const onAddPost = ()=>{
        const newPost = {
            user: {
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2482778.png&f=1&nofb=1',
                userName: 'Kostya'
            }
        }
        props.onAddPost(newPost)
    }

    const onChangeTextAria= () => {
        props.onChangeTextAria(postRef.current.value)
    }
    return (
        <div>
            <textarea ref={postRef} cols="30" rows="1" onChange={onChangeTextAria} value={props.profileState.textarea}/>
            <button onClick = {onAddPost}>Add</button>
            {props.profileState.posts.map(post => <Post postInfo = {post}  />)}
        </div>
    );
}

export default MyPosts;