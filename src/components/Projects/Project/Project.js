import React from 'react';
import style from './Project.module.scss'
import Button from '../../../common/components/Button/Button'
import Slide from 'react-reveal/Slide'

const Project = (props) => {
    return (
        <Slide left>

            <div className={style.project}>
                <div className={style.image} style={props.style}>
                    <Button link={props.link} text={'View'}/>
                </div>
                <div className={style.project_info}>
                    <h3 className={style.project_title}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </div>
        </Slide>
    );
};

export default Project;