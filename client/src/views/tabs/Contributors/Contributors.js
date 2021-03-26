import './Contributors.css';

import ContributorList from './ContributorList'
import React from 'react';
import ReactDOM from 'react-dom';

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


function Contributers() {
    
    return (
        <div className="App">
            <header className="App-header-CO">
                <h2>
                    Contributors
                </h2>
            </header>
            {arrayContributors.map(contributor =>
                <ContributorList {...contributor}/>
            )}
        </div>
    );
}

export default Contributers;