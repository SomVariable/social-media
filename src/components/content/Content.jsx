import React from 'react';
import style from './content.module.css'
import {Route, Routes} from "react-router-dom";
import NewsPage from "./news/NewsPage";
import MusicPage from "./music/MusicPage";
import SettingsPage from "./settings/SettingsPage";
import DialogPageContainer from "./dialogs/DialogPageContainer";
import UsersContainer from "./findUsers/UsersContainer";
import ProfileContainer from "./profile/ProfileContainer";

function Content(props) {
    return (
        <div className={style.content}>
            <Routes>
                <Route path = '/profile/*' element = {<ProfileContainer />} />
                <Route path = '/dialogs/*' element = {<DialogPageContainer/>} />
                <Route path = '/users/*' element = {<UsersContainer/>} />
                <Route path = '/news' element = {<NewsPage />} />
                <Route path = '/music' element = {<MusicPage />} />
                <Route path = '/settings' element = {<SettingsPage />} />
            </Routes>
        </div>
    );
}

export default Content;