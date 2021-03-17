import './Home.css';

// import Alert from '../../components/Alert';
import React from 'react';
// import { Route } from 'react-router';
// import { Router } from 'express';
import logo from '../../assets/logo.svg';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <div className="containers-md">
                    <Router>
                        <Route path="/users" exact component={Alert} />
                    </Router>
                </div> */}
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;
