import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <div className="App">
            <header className="App-header-AU">
                <h1>
                    About Us
                </h1>
            <Link id="logo-link" to="/">
                <img className=".image-container" src={ "/logo192.png" } alt="React logo" width="50px" height="50px"/>
            </Link>
            </header>
            <body className= "App-info-AU">
                <h2>Who we are:</h2>
                <a> A Gainesville, FL based publication dedicated to staging the beauty, art, literature, & culture of all people. 
                    We are a collective of artists and Gainesville community members. 
                </a>
                <h2>What we do:</h2>
                <a>We create and share artistic content of all kinds in a virtual magazine linked in the homepage.</a>
                <h2>Why we do it:</h2>
                <a>To give an outlet to underrepresented and marginalized communities and the art they create. We wish to foster an 
                    inclusive and unique environment that allows for the diversification of the Gainesville artistic community and beyond.


                </a>
            </body>
        </div>
    );
}

export default AboutUs;

/*
Who you are
What matters to you
What you do
How you do it
*/ 