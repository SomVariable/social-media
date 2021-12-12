import React from 'react';

const User = props => {

    return (
        <div>
            <div>
                <img src = {props.user.img} />
            </div>
            <div> {props.user.fullName} </div>
            {props.user.follow? <button>Unfollow</button>: <button>Follow</button>}
        </div>
    );
};

export default User;