import React from 'react';
import { Link } from 'react-router-dom';
import "./HeaderMenu.css";

function HeaderMenu(){
    return (
        <>
            <div id="headerMenuButton">
                <Link id="loginButton" to="/Login" >Login</Link>
                <Link id="signupButton" to="/Signup" >Signup</Link>
            </div>
        </>
    );
}

export default HeaderMenu;