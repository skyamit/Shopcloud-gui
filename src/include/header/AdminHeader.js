import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import "../Basic.css";
import { Button } from "reactstrap";

function AdminHeader(props) {
    const[logoutt,setLogout] = useState(false);
    const logout = ()=>{
        window.sessionStorage.setItem("admin",'null');
        setLogout(true);
    };

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(sessionStorage.getItem("admin") === 'null'){
            navigate("/admin/login",{});
        }
    },[logoutt,navigate]);

    return (
        <div>
            <div id="navbar">
                <div id="heading" className="bold">
                    <Link className="link white text"  to="/admin/home" >Shoploud</Link>
                </div>
                <div id="buttons" className="bold">
                    <Link className="link white text me-2" to="/admin/viewProducts" >View Products</Link>
                    <Link className="link white text ms-2"  to="/admin/addProducts" >Add Products</Link>
                    <Button className="link white text ms-2"  onClick={logout} >Logout</Button>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;