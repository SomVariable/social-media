import React from 'react';
import style from './input.module.css'

const Input = (props) => {
    return (
        <input onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}
               className={style.input}/>
    );
};

export default Input;