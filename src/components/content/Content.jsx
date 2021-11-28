import React from 'react';
import style from './content.module.css'
import ProfilePage from "./profile/ProfilePage";
import DialogPage from "./dialogs/DialogPage";
import {Route, Routes} from "react-router-dom";
import NewsPage from "./news/NewsPage";
import MusicPage from "./music/MusicPage";
import SettingsPage from "./settings/SettingsPage";

function Content(props) {
    return (
        <div className={style.content}>
            <Routes>
                <Route path = '/profile/*' element = {<ProfilePage profileData = {props.content.profileState} dispatch = {props.dispatch}/>} />
                <Route path = '/dialogs/*' element = {<DialogPage dialogsData ={props.content.dialogsState} dispatch = {props.dispatch}/>} />
                <Route path = '/news' element = {<NewsPage />} />
                <Route path = '/music' element = {<MusicPage />} />
                <Route path = '/settings' element = {<SettingsPage />} />
            </Routes>
        </div>
    );
}

export default Content;