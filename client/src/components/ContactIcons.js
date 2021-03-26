import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import data from '../data/contact';

const ContactIcons = () => (
    <header className = "icons">
        {data.map((s)=> (
            <body key={s.label}>
                <a href={s.link}>
                    <FontAwesomeIcon icon={s.icon}>

                    </FontAwesomeIcon>

                </a>
            </body>
        
        ))}
    </header>
);

export default ContactIcons;