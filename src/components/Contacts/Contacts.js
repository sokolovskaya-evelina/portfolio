import React from 'react';
import style from './Contacts.module.scss'
import Title from '../../common/components/title/Title';


const Contacts = () => {
    return (
        <div id='contacts' className={style.contacts_block}>
            <div className={style.contacts_container}>
                <Title title={'Contacts'}/>
                <form action="" className={style.form_container}>
                    <input type="text" className={style.form_area} placeholder='Name'/>
                    <input type="text" className={style.form_area} placeholder='E-mail'/>
                    <textarea className={style.message_area} placeholder='Message'/>
                    <button className={style.form_btn} type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;