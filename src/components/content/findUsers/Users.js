import React from 'react';
import styles from "./usersStyles.module.css"
import User from "./User/User";

const Users = props => {

    return (
        <div className={styles.usersPage}>
            {props.users.map(user => {
                return <User user = {user}/>
            })}
        </div>
    );
};

export default Users;