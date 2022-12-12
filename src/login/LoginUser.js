import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../include/Basic.css';

function LoginUser(){
    return (
        <div>
            <div class="form">
                <h1>User Sign In</h1>
                <hr/>
                <Form>
                    <FormGroup floating>
                        <Input id="email" name="email" placeholder="Email" type="email"  required/>
                        <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="password" name="password" placeholder="Password" type="password"   required/>
                        <Label for="password">Password</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button className="btn-success" type="submit">Submit</Button>
                    </FormGroup>
                </Form>
                <hr/>
                <b>
                    <p className='inline'>Yet to Create  Account?</p>
                    <Link className="link inline ms-1" to="/signup" >Click Here</Link>
                </b>
                <br/>
                <b>
                    <p className='inline'>Login into Business Account?</p>
                    <Link className="link inline ms-1" to="/admin/login" >Click Here</Link>
                </b>
            </div>
        </div>
    );
}

export default LoginUser;
