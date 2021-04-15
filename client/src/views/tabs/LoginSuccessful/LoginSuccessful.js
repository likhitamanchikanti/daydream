import React from 'react';

function delayedRedirect(){
    window.location.href='./Home';
}


function LoginSuccessful() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                
                </p>
            </header>
            <div className = "LoginSuccessful">
                <div>
                   You have successfully logged in!
                   <br></br>
                   Redirecting back to home page!
                   <br></br>
                   {setTimeout(delayedRedirect, 4000)}
                </div>
            </div>
        </div>
    );
}

export default LoginSuccessful;