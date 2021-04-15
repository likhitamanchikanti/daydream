import React from 'react';
import Popup from './../LoginFailed/Popup.js'
import './Popup.css'
import {useState} from 'react'



function LoginFailed() {
    const [buttonPopup, setButtonPopup] =  useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                
                </p>
            </header>
            <button onClick={() => setButtonPopup(true)}>test</button>

           <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
               <div>My Popup</div>
           </Popup>
        </div>
        
    );
}

export default LoginFailed;