import React from 'react';
import style from "../dialogs.module.css";
import {Link} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <Link to={'/dialogs/' + props.id} >{props.name}</Link>
        </div>
    );
};

export default DialogItem;