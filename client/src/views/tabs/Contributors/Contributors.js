import React from 'react';
import './Contributors.css';
import ContributorList from './ContributorList'
//import {arrayContributors} from './../Contributors/ContributorData.js'
import Popup from './Popup.js'
import {useState} from 'react'


var arrayContributors = [
    {
        "name": "Contributor 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    {
        "name": "Contributor 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna. Fringilla est ullamcorper eget nulla facilisi. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Lectus magna fringilla urna porttitor rhoncus dolor purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Nunc vel risus commodo viverra. At varius vel pharetra vel turpis nunc. Amet venenatis urna cursus eget nunc scelerisque viverra. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Non arcu risus quis varius quam quisque id. Orci eu lobortis elementum nibh tellus molestie.",
        "image" : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    {
        "name": "Contributor 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna. Fringilla est ullamcorper eget nulla facilisi. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Lectus magna fringilla urna porttitor rhoncus dolor purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Nunc vel risus commodo viverra. At varius vel pharetra vel turpis nunc. Amet venenatis urna cursus eget nunc scelerisque viverra. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Non arcu risus quis varius quam quisque id. Orci eu lobortis elementum nibh tellus molestie.",
        "image" : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    {
        "name": "Contributor 4",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna. Fringilla est ullamcorper eget nulla facilisi. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Lectus magna fringilla urna porttitor rhoncus dolor purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Nunc vel risus commodo viverra. At varius vel pharetra vel turpis nunc. Amet venenatis urna cursus eget nunc scelerisque viverra. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Non arcu risus quis varius quam quisque id. Orci eu lobortis elementum nibh tellus molestie.",
        "image" : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
]

var a=false;
arrayContributors=JSON.parse(localStorage.getItem('arrayContributors'));

if(localStorage.getItem('loginStatus') == null){
    localStorage.setItem('loginStatus', JSON.stringify(a));
  }

function nullCheck(){
    if(localStorage.getItem('arrayContributors') == null){
        localStorage.setItem('arrayContributors', JSON.stringify(arrayContributors));
    }
}

function nullCheck2(){
    var a = false;
    if(localStorage.getItem('loginStatus') == null){
        localStorage.setItem('loginStatus', JSON.stringify(a));
    }
}


function addContributor(){
    var contributorName =  document.getElementById("name").value;
    var contributorDescription=  document.getElementById("description").value;
    var imgLink=  document.getElementById("image").value;
    arrayContributors.push({name: contributorName, description: contributorDescription, image: imgLink });
    localStorage.setItem('arrayContributors', JSON.stringify(arrayContributors));
    arrayContributors=JSON.parse(localStorage.getItem('arrayContributors'));
    alert("Contributor successfully added!");

    document.getElementById("name").value="";
    document.getElementById("description").value="";
    document.getElementById("image").value="";
}

function removeContributor(){
    var found = false;
    var contributorName =  document.getElementById("name1").value;
    for(var i = 0; i<arrayContributors.length;i++){
        if(arrayContributors[i].name.localeCompare(contributorName)==0){
            arrayContributors.splice(i, 1);
            found=true;
            localStorage.setItem('arrayContributors', JSON.stringify(arrayContributors));
            arrayContributors=JSON.parse(localStorage.getItem('arrayContributors'));
            alert("Contributor successfully removed!");
        }
    }
    if(found==false){
        alert("Contributor not found!");
    }
    document.getElementById("name1").value="";
}

const handleSubmit = event => {
    event.preventDefault();
    addContributor();
  }

  const handleSubmit2 = event => {
    event.preventDefault();
    removeContributor();
  }

function Contributers() {
    const [buttonPopup, setButtonPopup] =  useState(false);
    const [buttonPopup2, setButtonPopup2] =  useState(false);
    return (
        
        <div className="App">
            {document.body.style.zoom = (window.innerWidth / window.outerWidth)}
            <header className="App-header">
                <p>
                    Contributers
                </p>
            </header>

           
            {nullCheck2()}
            {JSON.parse(localStorage.getItem('loginStatus'))==true &&
            
            <div>
            
            <button onClick={() => setButtonPopup(true)}>Add Contributor</button>
            <br></br>
            <br></br>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

            <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Enter Name/Description/Image Link of Contributor</legend>
              <ul>
                  <label for="name">Name: </label>
                  <input type="text" id="name" required/>
                <br></br>
                <br></br>
                  <label for="description">Description: </label>
                  <input type="text" id="description" required/> 
                  <br></br>  
                <br></br>
                  <label for="image">Image Link: </label>
                  <input type="text" id="image" required/> 
              </ul>
            </fieldset>
            <button>Add Contributor</button>
            </form>

            </Popup>
            
            

            <button onClick={() => setButtonPopup2(true)}>Remove Contributor</button>
            <br></br>
            <br></br>
            <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>

            <form onSubmit={handleSubmit2}>
            <fieldset>
              <legend>Enter Name of Contributor</legend>
              <ul>
                  <label for="name1">Name: </label>
                  <input type="text" id="name1" required/>
              </ul>
            </fieldset>
            <button>Remove Contributor</button>
            </form>

            </Popup>
            </div>
            }           
            
            {nullCheck()}
            {JSON.parse(localStorage.getItem('arrayContributors')).map(contributor =>
                <ContributorList {...contributor}/>
            )}
        </div>
    );
}

export default Contributers;
