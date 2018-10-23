import React, { Component } from 'react';

//stateless functional component
const NavBar =(props) =>{
    console.log('NavBar - rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav>
   );
};


// class NavBar extends Component {
//     render() { 
        
//     }
// }
 
export default NavBar;