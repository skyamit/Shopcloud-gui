import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../Basic.scss';

function SignupUser(){
    return (
        <div className='form'>
            <h1>Create User Account</h1>
            <hr/>
            <div>
                <Form  >
                    <FormGroup floating>
                        <Input id="name" name="name" placeholder="Name" type="text"  required/>
                        <Label htmlFor="name">Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="email" name="email" placeholder="Email" type="email" required/>
                        <Label htmlFor="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="password" name="password" placeholder="Password" type="password" required/>
                        <Label htmlFor="password">Password</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button className="btn-success" type="submit">Signup</Button>
                    </FormGroup>
                </Form>
            </div>
            <hr/>
            <b>
                <p className='inline'>Already Created User Account? </p>
                <Link className="link inline ms-1" to="/login" > login now</Link>
            </b>
            <br/>
            <b>
                <p className='inline'>Create Business account? </p>
                <Link className="link inline ms-1" to="/admin/signup" > Click Here</Link>
            </b>
        </div>
    );
}

export default SignupUser;
