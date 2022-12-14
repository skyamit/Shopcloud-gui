import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "../container/login/Login";
import Signup from '../container/signup/Signup';
import Header from '../components/molecules/header/Header';
import About from '../container/about/About';
import Home from '../container/home/Home';
import Footer from '../components/molecules/footer/Footer';
import "../style/Basic.scss";
import LoginUser from '../container/login/LoginUser';
import SignupUser from '../container/signup/SignupUser';
import AdminHeader from '../components/molecules/header/AdminHeader';
import AdminFooter from '../components/molecules/footer/AdminFooter';
import AddProduct from '../container/addproduct/AddProduct';
import ViewProduct from '../container/viewproduct/ViewProduct';

function AppRouter(props) {
    return (
        <div>
            <Routes>    
                <Route path="/" element={<Header />} exact />

                <Route path="/login" element={<Header />} exact />
                <Route path="/Signup" element={<Header />} exact />
                
                <Route path="/admin/Signup" element={<Header />} exact />
                <Route path="/admin/Login" element={<Header />} exact />
                
                <Route path="/admin/home" element={<AdminHeader />} exact />
                <Route path="/admin/products" element={<AdminHeader />} exact />
                <Route path="/admin/add" element={<AdminHeader />} exact />
            </Routes>
            
            <div className='d-flex justify-content-center p-20 m-20'>
                <div className='col-12 col-lg-8 col-md-12' >
                    <h1 className='text-center'>{props.heading}</h1>
                    <div>
                        <Routes>
                            <Route path="/" element={<About/>} exact />
                            
                            <Route path="/login" element={<LoginUser />} exact />
                            <Route path="/Signup" element={<SignupUser />} exact />
                
                            <Route path="/admin/Signup" element={<Signup />} exact />
                            <Route path="/admin/Login" element={<Login  />} exact />
                            
                            <Route path="/admin/Home" element={<Home />} exact />
                            <Route path="/admin/products" element={<ViewProduct />} exact />
                            <Route path="/admin/add" element={<AddProduct />} exact />
                        </Routes>
                    </div>
                </div>
            </div>
            <Routes>    
                <Route path="/" element={<Footer/>} exact />

                <Route path="/login" element={<Footer/>} exact />
                <Route path="/Signup" element={<Footer/>} exact />
                
                <Route path="/admin/Signup" element={<Footer />} exact />
                <Route path="/admin/Login" element={<Footer />} exact />
                
                <Route path="/admin/home" element={<AdminFooter />} exact />
                <Route path="/admin/products" element={<AdminFooter />} exact />
                <Route path="/admin/add" element={<AdminFooter />} exact />
            </Routes>
        </div>
    );
}

export default AppRouter;