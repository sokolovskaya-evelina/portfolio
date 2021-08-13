import React from 'react'
import style from './Skills.module.scss'
import Skill from './Skill/Skill';
import Title from '../../common/components/title/Title';
import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import sassIcon from '@iconify-icons/simple-icons/sass';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import reactIcon from '@iconify-icons/simple-icons/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import materialUi from '@iconify-icons/simple-icons/material-ui';
import bootstrapIcon from '@iconify-icons/simple-icons/bootstrap';
import antdesignIcon from '@iconify-icons/simple-icons/antdesign';
import storybookIcon from '@iconify-icons/simple-icons/storybook';
import gitIcon from '@iconify-icons/simple-icons/git';

const Skills = () => {
    const icons = {
        HTML: html5Icon,
        CSS: css3Icon,
        SASS: sassIcon,
        JS: javascriptIcon,
        TS: typescriptIcon,
        React: reactIcon,
        Redux: reduxIcon,
        materialUi,
        bootstrap: bootstrapIcon,
        antDesign: antdesignIcon,
        storybook: storybookIcon,
        git: gitIcon
    }

    return (
        <div id="skills" className={style.skills_block}>
            <div className={style.skills_container}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JavaScript'}
                           icon={icons.JS}/>
                    <Skill title={'TypeScript'}
                           icon={icons.TS}/>
                    <Skill title={'React'}
                           icon={icons.React}/>
                    <Skill title={'Redux'}
                           icon={icons.Redux}/>
                    <Skill title={'HTML'}
                           icon={icons.HTML}/>
                    <Skill title={'CSS'}
                           icon={icons.CSS}/>
                    <Skill title={'SASS'}
                           icon={icons.SASS}/>
                    <Skill title={'Storybook'}
                           icon={icons.storybook}/>
                    <Skill title={'Material UI'}
                           icon={icons.materialUi}/>
                    <Skill title={'AntDesign'}
                           icon={icons.antDesign}/>
                    <Skill title={'Bootstrap'}
                           icon={icons.bootstrap}/>
                    <Skill title={'Git'}
                           icon={icons.git}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;