import React from 'react';
import {MongoClient} from 'mongodb';
import AccountList from './AccountList'
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Login.css';
import Popup from './../Contributors/Popup.js'
import {useState} from 'react'
import './../Contributors/Popup.css'

var arrayAccounts = [
  {
      "username": "Joe",
      "password": "123",
  },
  {
      "username": "Donny",
      "password": "abc",
  },
  
]

var loginStatus;

arrayAccounts=JSON.parse(localStorage.getItem('arrayAccounts'));

function nullCheck(){
  if(localStorage.getItem('arrayAccounts') == null){
      localStorage.setItem('arrayAccounts', JSON.stringify(arrayAccounts));
  }
}

function setLoginStatus(){
  var loggedIn=false;
  localStorage.setItem('loginStatus', JSON.stringify(loggedIn));
  alert("You have been logged out!")
  window.location.reload();
}




  function redirect(){
  arrayAccounts=JSON.parse(localStorage.getItem('arrayAccounts'));  
  loginStatus=false;
  var username =  document.getElementById("username").value;
  var password=  document.getElementById("password").value;
  var numAccounts = arrayAccounts.length;
  for(var i = 0; i<numAccounts; i++){
    if(username==arrayAccounts[i].username && password==arrayAccounts[i].password){
       loginStatus=true;
       localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
       window.location.href='./LoginSuccessful';
    }
  }
  if(loginStatus==false){
    localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
    alert("Incorrect username or password!");
  }
}

function addAdmin(){
  var adminName =  document.getElementById("name").value;
  var adminPassword=  document.getElementById("password").value;
  arrayAccounts.push({username: adminName, password: adminPassword});
  localStorage.setItem('arrayAccounts', JSON.stringify(arrayAccounts));
  arrayAccounts=JSON.parse(localStorage.getItem('arrayAccounts'));
  alert("Admin account successfully added!");

  document.getElementById("name").value="";
  document.getElementById("password").value="";
}

function removeAdmin(){
  var found = false;
  var adminName =  document.getElementById("name1").value;
  for(var i = 0; i<arrayAccounts.length;i++){
      if(arrayAccounts[i].username.localeCompare(adminName)==0){
          arrayAccounts.splice(i, 1);
          found=true;
          localStorage.setItem('arrayAccounts', JSON.stringify(arrayAccounts));
          arrayAccounts=JSON.parse(localStorage.getItem('arrayAccounts'));
          alert("Admin successfully removed!");
      }
  }
  if(found==false){
      alert("Admin account not found!");
  }
  document.getElementById("name1").value="";
}

const handleSubmit = event => {
  event.preventDefault();
  redirect();
}

const handleSubmit2 = event => {
  event.preventDefault();
  addAdmin();
}

const handleSubmit3 = event => {
  event.preventDefault();
  removeAdmin();
}

function Login() {
  const [buttonPopup, setButtonPopup] =  useState(false);
  const [buttonPopup2, setButtonPopup2] =  useState(false);
  const [buttonPopup3, setButtonPopup3] =  useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Login
                </p>
            </header>

            <div>
            
           {JSON.parse(localStorage.getItem('loginStatus'))==true &&
           <div>
            <button onClick={() => setButtonPopup(true)}>View Admin Accounts</button>
            <br></br>
            <br></br>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

              Username : Password
              <br></br>
              <br></br>
              {nullCheck()}
              {JSON.parse(localStorage.getItem('arrayAccounts')).map(account =>
                <AccountList {...account}/>
            )}
              <br></br>
            </Popup>

            <div>
            <button onClick={() => setButtonPopup2(true)}>Add Administrator</button>
            <br></br>
            <br></br>
            <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
            <form onSubmit={handleSubmit2}>
            <fieldset>
              <legend>Enter Name/Password of Admin</legend>
              <ul>
                  <label for="name">Name: </label>
                  <input type="text" id="name" required/>
                <br></br>
                <br></br>
                  <label for="password">Password: </label>
                  <input type="text" id="password" required/> 
                  <br></br>  
                <br></br>
              </ul>
            </fieldset>
            <button>Add Admin</button>
            </form>
            </Popup>
            </div>

            <button onClick={() => setButtonPopup3(true)}>Remove Administrator</button>
            <br></br>
            <br></br>
            <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>

            <form onSubmit={handleSubmit3}>
            <fieldset>
              <legend>Enter Username</legend>
              <ul>
                  <label for="name1">Name: </label>
                  <input type="text" id="name1" required/>
              </ul>
            </fieldset>
            <button>Remove Admin</button>
            </form>

            </Popup>
            
            <button onClick={setLoginStatus}>Logout</button>
            </div>
              }

              
            {JSON.parse(localStorage.getItem('loginStatus'))==false &&
            <form onSubmit={handleSubmit} id="form">
            <h2>Administrator Log In</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                <br></br>
                
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/> 
              </ul>
            </fieldset>
            <button>Login</button>
          </form>    
            }
            </div>
        </div>
        
    );
}

export default Login;