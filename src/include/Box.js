import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./Box.css";
import Login from "../login/Login";
import Signup from '../signup/Signup';
import About from './About';

function Box(props) {
    return (
        <div id="outer">
            <div id="box">
                <h1>{props.heading}</h1>
                <hr/>
                <div>
                <Routes>
                    <Route path="/" element={<About heading="About Shoploud" />} exact />
                    <Route path="/Signup" element={<Signup heading="Signup Page" />} exact />
                    <Route path="/Login" element={<Login heading="Login Page" />} exact />
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default Box;