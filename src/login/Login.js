import React, { useEffect, useState } from 'react';
import { Form,Button, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import "../include/Basic.css";

function Login(props) {
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    const [checklogin,setCheckLogin] = useState(false);

    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await fetch('http://localhost:8080/loginAdmin/'+email+'/'+password);
        if(response.status === 404){
            console.log('404');
            document.getElementById("message").innerHTML= "Incorrect email or password";
        }
        if(response.status === 200){
            const json = await response.json();
            window.sessionStorage.setItem("admin",JSON.stringify(json));
            setCheckLogin(true);
        }
    } 

    const onSubmit = async (e) => {
        e.preventDefault();
        getUsers();
      };

    useEffect(()=>{
        if(sessionStorage.getItem("admin") !== 'null')
            navigate("/admin/home");

    },[checklogin,navigate]);

    return (
        <div>
            <div className='form'>
                <h1>Business Login</h1>
                <hr/>
                <Form  onSubmit={onSubmit}>
                    <FormGroup floating>
                        <Input id="email" name="email" placeholder="Email" type="email" onChange={(event)=>{setEmail(event.target.value)}} required/>
                        <Label htmlFor="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="password" name="password" placeholder="Password" type="password" onChange={(event)=>{setPassword(event.target.value)}}  required/>
                        <Label htmlFor="password">Password</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button className="btn-success" type="submit">Submit</Button>
                    </FormGroup>
                </Form>
                <p className="text text-danger" id="message"></p>
                <hr/>
                <b>
                    <p className='inline'>Yet to Create Business Account?</p>
                    <Link className="link inline ms-1" to="/admin/signup" >Click Here</Link>
                </b>
                <br/>
                <b>
                    <p className='inline'>Login as User?</p>
                    <Link className="link inline ms-1" to="/login" >Click Here</Link>
                </b>
            </div>
        </div>
    );
}

export default Login;
