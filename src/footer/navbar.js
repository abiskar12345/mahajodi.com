import React, { Fragment } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import Porfile from '../profile/profile';

class Navbar extends React.Component{

    render(){
        return(
          
            
              
            <nav>
            

            <a className="links-header logo" href="#">Logo</a>
            <div className="rightSection">
            <a className=" links-header" href="h">Home</a>
            <a className="links-header" href="#">Contact Us</a>
            <a className="links-header" href="#">About Us</a>
            <a className="links-header" href="#">More Info</a>
            <a className="links-header" href="#">Register</a>
            </div>
            
            <div className="search-bar">

                <input type="text" className="search-text " name="search" placeholder="Search Here ......."/>
                <Link to="/" className ="search-btn"> <i className="fas fa-search"></i></Link>
                   
            </div>
            <div className="profile-navbar">
                <Link to="">
            <i className="fas fa-user-alt"></i>
            </Link>
            </div>
                
            </nav>
                  
                  
                                       
        )
    }
};
export default Navbar;
 