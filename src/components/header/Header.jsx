import React from 'react';
import style from  './header.module.css'

function Header(props) {
    return (
        <div className={style.header}>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig10.deviantart.net%2F5bd6%2Ff%2F2013%2F179%2F7%2F3%2Funtitled_1_by_dynamicz34-d6b2h7f.png&f=1&nofb=1" alt="logo"/>
        </div>
    );

}

export default Header;