import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../../../style/Basic.scss";

function Header(props) {
    return (
        <div>
            <div id="navbar">
                <div id="heading" className="bold">
                    <Link className="header-text link white text"  to="/" >SHOPLOUD</Link>
                </div>
                <div id="buttons" className="bold">
                    <Link className="header-text link white text me-2" to="/Login" >Login</Link>
                    <Link className="header-text link white text ms-2"  to="/Signup" >Signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;