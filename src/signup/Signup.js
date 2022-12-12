import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form,Button, FormGroup, Input, Label } from 'reactstrap';

function Signup(props){
    const frole = "admin";
    const fstatus = 1;
    const fcreatedTime = Date.now();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const variable = {
        "frole":frole,
        "fstatis":fstatus,
        "fcreatedTime":fcreatedTime,
        "fname":name,
        "fpassword":password,
        "femail":email,
        "fupdatedTime":fcreatedTime
    };
    const createAccount = async() => {
        fetch('http://localhost:8080/createAdmin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(variable)
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(createAccount());
    };

    return (
        <div className='form'>
            <h1>Create Businesss Account</h1>
            <hr/>
            <div>
                <Form  onSubmit={onSubmit}>
                    <FormGroup floating>
                        <Input id="name" name="name" placeholder="Name" type="text" onChange={(event)=>{setName(event.target.value)}} required/>
                        <Label for="name">Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="email" name="email" placeholder="Email" type="email" onChange={(event)=>{setEmail(event.target.value)}} required/>
                        <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="password" name="password" placeholder="Password" type="password" onChange={(event)=>{setPassword(event.target.value)}}  required/>
                        <Label for="password">Password</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button className="btn-success" type="submit">Signup</Button>
                    </FormGroup>
                </Form>
            </div>
            <hr/>
            <b>
                <p className='inline'>Already Created Business Account? </p>
                <Link className="link inline ms-1" to="/admin/login" > login now</Link>
            </b>
            <br/>
            <b>
                <p className='inline'>Create account as User? </p>
                <Link className="link inline ms-1" to="/signup" > Click Here</Link>
            </b>
        </div>
    );
}

export default Signup;