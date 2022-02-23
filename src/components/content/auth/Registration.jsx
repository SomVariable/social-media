import React, {useState} from 'react';
import style from './auth.module.css'
import Input from "../../../common/Input";
import {registration} from "../../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={style.auth}>
            <Input value = {email} setValue = {setEmail} type = 'text' placeholder = "Введите email"/>
            <Input value = {password} setValue = {setPassword} type = 'password' placeholder = "Введите password"/>
            <button className={style.registration__btn} onClick={() => registration(email, password)}>Войти</button>
        </div>
    );
};

export default Registration;