import React, { useEffect, useState } from 'react';
import { Form,Button, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import "../include/Basic.css";

function Login(props) {
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    const [admin, setAdmin] = useState({
        "fid": null,
        "fname": null,
        "femail": null,
        "fpassword": null,
        "frole": null,
        "fstatus": null,
        "fcreatedAt": null,
        "fupdatedAt": null
    });
    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await fetch('http://localhost:8080/loginAdmin/'+email+'/'+password);
        const json = await response.json();
        await setAdmin(json);
    } 

    const onSubmit = async (e) => {
        e.preventDefault();
        getUsers();
      };

    useEffect(()=>{
        if(admin.fid != null)
            navigate("/admin/home",{state:{admin:admin}});
    },[admin]);

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
