import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Basic.css";

function Header(props) {
    return (
        <div>
            <div id="navbar">
                <div id="heading" className="bold">
                    <Link className="link white text"  to="/" >Shoploud</Link>
                </div>
                <div id="buttons" className="bold">
                    <Link className="link white text me-2" to="/Login" >Login</Link>
                    <Link className="link white text ms-2"  to="/Signup" >Signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;