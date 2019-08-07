import React from 'react';
//import {NavLink} from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import classes from './Navbar.module.css';

const navbar = (props) => {
    return (

        <nav className={classes.topnav}>
            <button><img src = {logo} alt = "" width={"40px"} height={"40px"} className={classes.logo}/></button>
            <button>Your Groups</button>
            <button>Find Groups</button>
            <button>Events</button>
            <button>Notifications</button>

            <div className={classes["topnav-right"]}>
                <button>Sign Up</button>
            </div>
        </nav>

    );
};

export default navbar;