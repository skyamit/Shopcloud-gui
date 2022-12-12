import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "../login/Login";
import Signup from '../signup/Signup';
import Header from './header/Header';
import About from '../about/About';
import Home from '../home/Home';
import Footer from './footer/Footer';
import "./Basic.css";
import LoginUser from '../login/LoginUser';
import SignupUser from '../signup/SignupUser';

function AppRouter(props) {
    return (
        <div>
            <Routes>    
                <Route path="/" element={<Header />} exact />

                // User before login
                <Route path="/login" element={<Header />} exact />
                <Route path="/Signup" element={<Header />} exact />
                
                // Admin before login
                <Route path="/admin/Signup" element={<Header />} exact />
                <Route path="/admin/Login" element={<Header />} exact />
                
                // Admin routes 
                <Route path="/admin/home" element={<Header />} exact />
            
                // User routes
            </Routes>
            
            <div className='d-flex justify-content-center p-20 m-20'>
                <div className='col-12 col-lg-6 col-md-12' >
                    <h1 className='text-center'>{props.heading}</h1>
                    <div>
                        <Routes>
                            <Route path="/" element={<About/>} exact />
                            
                            <Route path="/login" element={<LoginUser />} exact />
                            <Route path="/Signup" element={<SignupUser />} exact />
                
                            <Route path="/admin/Signup" element={<Signup />} exact />
                            <Route path="/admin/Login" element={<Login  />} exact />
                            
                            <Route path="/admin/Home" element={<Home />} exact />
                        </Routes>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default AppRouter;