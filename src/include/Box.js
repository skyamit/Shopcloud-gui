import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./Box.css";
import Login from "../login/Login";
import Signup from '../signup/Signup';
import About from './About';
import Header from './header/Header';

function Box(props) {
    return (
        <div>
            <Routes>     
                <Route path="/" element={<Header name="Shoploud" option1="Products" option2="Categories" button1="Login" button2="Signup" />} exact />
                <Route path="/Signup" element={<Header name="Shoploud" option1="Products" option2="Categories" button1="Login" button2="Signup" />} exact />
                <Route path="/Login" element={<Header name="Shoploud" option1="Products" option2="Categories" button1="Login" button2="Signup" />} exact />
                <Route path="/Login" element={<Header name="Shoploud" option1="Products" option2="Categories" button1="Profile" button2="Products" />} exact />
            </Routes>
            
            <div id="outer">
                <div id="box">
                    <h1>{props.heading}</h1>
                    <hr/>
                    <div>
                        <Routes>
                            <Route path="/" element={<About heading="About Shoploud" />} exact />
                            <Route path="/Signup" element={<Signup heading="Admin Signup Page" />} exact />
                            <Route path="/Login" element={<Login heading="Admin Login Page" />} exact />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;