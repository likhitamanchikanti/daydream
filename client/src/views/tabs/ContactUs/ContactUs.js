import React, { useState } from 'react';
import './ContactUs.css'
import { Link } from 'react-router-dom';
//import Button from '../../components/Button'

function ContactUs() {
//     const [click, setClick] = useState(false);
//     const [button, setButton]= useState(true);
    
//     const showButton= () => {
//        if(window.innerWidth <=960){
//             setButton(false);
//        }
//        else{
//             setButton(true);
//        }
//        //<Button buttonStyle='btn-primary'>Model Recruitment Form</Button>
//    };

//     window.addEventListener('resize', showButton);
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Contact Us
                </h1>
            </header>
            <body className= "App-info">
                <h2>Interested in joining DayDream Magazine?</h2>
            </body>
            
        </div>
    );
}

export default ContactUs;