import './Home.css';

import React from 'react';
import logo from '../../assets/logo.svg';

function Home() {
    return (
        <div className="App">
            
            <br />
            <br />

            <div className="featured-video-container">
                <div className="featured-video" />
            </div>
                
            <br />
            <br />
            <br />

            <div className="sup">
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
                  
        </div>
    );
}

export default Home;
