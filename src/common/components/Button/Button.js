import React from 'react';
import style from './Button.module.scss'
const Button = (props) => {
    return (
       <a target='_blank' rel="noreferrer" href={props.link} className={style.btn}>{props.text}</a>
    );
};

export default Button;