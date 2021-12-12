import React from 'react';
import style from './sidebar.module.css'
import {NavLink} from "react-router-dom";

function Sidebar(props) {
    return (
        <nav className={style.navbar}>
            <div className={style.item}><NavLink to="/profile" >profile</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs" >message</NavLink></div>
            <div className={style.item}><NavLink to="/users" >users</NavLink></div>
            <div className={style.item}><NavLink to="/news" >news</NavLink></div>
            <div className={style.item}><NavLink to="/music" >music</NavLink></div>
            <div className={style.item}><NavLink to="/settings" >settings</NavLink></div>
        </nav>
    );
}

export default Sidebar;