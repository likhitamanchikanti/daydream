import './ContactUs.css';

import ContactIcons from '../../../components/ContactIcons.js';
import React from 'react';

//import { Link } from 'react-router-dom';



function ContactUs() {
    return (
        <div className="App">
            <header className="App-header-CU">
                <h2>
                    Contact Us
                </h2>
            </header>
            
                <h2>Interested in joining DayDream Magazine?</h2>
                <img class=".image-container" src={"TempIcons.png"}width={700} height={300}></img>
                <p class ="bottom-three"></p>
                <h3>
                    Follow us for more content:
                </h3>
                <img class=".image-container" src={"facebook.png"}width={200} height={150}></img>
                <img class=".image-container" src={"insta.png"}width={150} height={150}></img>
                <img class=".image-container" src={"Spotify.png"}width={120} height={150}></img>
                <p class ="bottom-three"></p>
                
           
       <font size="8">    
       <ContactIcons ></ContactIcons>
       </font>
        </div> 
        
    
    );
}

export default ContactUs;