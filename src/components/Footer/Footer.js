import React from 'react';
import style from './Footer.module.scss'
import {Icon} from '@iconify/react';
import telegramIcon from '@iconify-icons/simple-icons/telegram';
import githubIcon from '@iconify-icons/simple-icons/github';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
import vkIcon from '@iconify-icons/simple-icons/vk';
import instagramIcon from '@iconify-icons/simple-icons/instagram';
import Bounce from 'react-reveal/Bounce';


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_container}>
                <Bounce bottom>
                    <nav className={style.footer_icons}>
                        <a rel="noreferrer" className={style.footer_icon} href={'https://vk.com/idsokolovskayaevi'} target={'_blank'}>
                            <Icon className={style.icon} icon={vkIcon}/>
                        </a>
                        <a rel="noreferrer" className={style.footer_icon} href={'https://t.me/sokolovskaya_evelina'} target={'_blank'}>
                            <Icon className={style.icon} icon={telegramIcon}/>
                        </a>
                        <a rel="noreferrer" className={style.footer_icon} href={'https://by.linkedin.com/in/evelina-sokolovskaya-38834520b'}
                           target={'_blank'}>
                            <Icon className={style.icon} icon={linkedinIcon}/>
                        </a>
                        <a rel="noreferrer" className={style.footer_icon} href={'https://www.instagram.com/_sokolovskaya_evelina/'}
                           target={'_blank'}>
                            <Icon className={style.icon} icon={instagramIcon}/>
                        </a>
                        <a rel="noreferrer" className={style.footer_icon} href={'https://github.com/sokolovskaya-evelina'} target={'_blank'}>
                            <Icon className={style.icon} icon={githubIcon}/>
                        </a>
                    </nav>
                    <span className={style.title}>Evelina Sokolovskaya</span>
                </Bounce>
            </div>
        </div>
    );
};

export default Footer;