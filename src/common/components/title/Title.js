import React from 'react';
import style from './Title.module.scss';
import Bounce from 'react-reveal/Bounce';

const Title = (props) => {
    return (
        <Bounce top >
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
        </Bounce>
    );
};

export default Title;