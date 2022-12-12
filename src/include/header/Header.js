import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Basic.css";

function Header(props) {
    return (
        <div>
            <div id="navbar">
                <div id="heading" className="bold">
                    <Link className="link white text" id="loginButton" to="/admin" >Shoploud</Link>
                </div>
                <div id="buttons" className="bold">
                    <Link className="link white text" id="loginButton" to="/admin/Login" >Login</Link>
                    <Link className="link white text" id="signupButton" to="/admin/Signup" >Signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;