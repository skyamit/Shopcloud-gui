import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <div>
            <div id="navbar">
                <div id="heading" className="bold">
                    <Link id="loginButton" to="/" >{props.name}</Link>
                </div>
                <div id="option1" className="bold">
                    {props.option1}
                </div>
                <div id="option2" className="bold">
                    {props.option2}
                </div>
                <div id="search" className="bold">
                    Search Bar
                </div>
                <div id="buttons" className="bold">
                    <HeaderMenu/> 
                </div>
            </div>
        </div>
    );
}

export default Header;