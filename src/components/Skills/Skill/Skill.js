import React from 'react';
import style from './Skill.module.scss'
import {Icon} from '@iconify/react';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

const Skill = (props) => {
    return (
        <Fade left>
            <div className={style.skill}>
                <div className={style.skill_icon_container}>
                    <Rotate cascade>
                        <div className={style.skill_icon}>
                            <Icon className={style.icon} icon={props.icon}/>

                        </div>
                    </Rotate>
                </div>
                <h3 className={style.title}>{props.title}</h3>
            </div>
        </Fade>

    );
};

export default Skill;