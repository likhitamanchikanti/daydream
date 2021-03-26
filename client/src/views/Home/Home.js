import './Home.css';

import React from 'react';

function Home() {
    return (
        <div className="App">

            <div className="featured-video-container">
                <div className="featured-video" />
            </div>
                
            <br />
            <br />
            <br />

            <div className="bottom">
                <h2 className="heading">Featured Artwork</h2>
                <div className="featured-items-container">
                    <div className="featured-items" />                   
                    <div className="featured-items" />                   
                    <div className="featured-items" />                 
                </div>
            </div>
  
            <br />
            <br />
                
            <div className="featured-items-container">
                <div className="featured-items" />                   
                <div className="featured-items" />                   
                <div className="featured-items" />                   
            </div>

            <br />
            <br />
            <br />
                  
        </div>
    );
}

export default Home;
