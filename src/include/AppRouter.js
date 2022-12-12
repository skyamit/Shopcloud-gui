import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "../login/Login";
import Signup from '../signup/Signup';
import Header from './header/Header';
import About from '../about/About';
import Home from '../home/Home';
import Footer from './footer/Footer';
import "./Basic.css";

function AppRouter(props) {
    console.log(props.name);
    return (
        <div>
            <Routes>     
                <Route path="/admin" element={<Header />} exact />
                <Route path="/admin/Signup" element={<Header />} exact />
                <Route path="/admin/Login" element={<Header />} exact />
                <Route path="/admin/home" element={<Header />} exact />
            </Routes>
            
            <div className='d-flex justify-content-center p-20 m-20'>
                <div className='col-12 col-lg-6 col-md-12' >
                    <h1 className='text-center'>{props.heading}</h1>
                    <div>
                        <Routes>
                            <Route path="/admin" element={<About heading="About Shoploud" />} exact />
                            <Route path="/admin/Signup" element={<Signup heading="Admin Signup Page" />} exact />
                            <Route path="/admin/Login" element={<Login heading="Admin Login Page" />} exact />
                            <Route path="/admin/home" element={<Home />} exact />
                        </Routes>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default AppRouter;