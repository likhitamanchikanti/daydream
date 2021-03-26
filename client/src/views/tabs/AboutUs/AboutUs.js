import './AboutUs.css';

import React from 'react';

function AboutUs() {
    return (
<div className="App">
            <header className="App-header-AU">
                <h2>
                    About Us
                </h2>
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
                <br />
                <br />
            </body>
        </div>
    );
}

export default AboutUs;