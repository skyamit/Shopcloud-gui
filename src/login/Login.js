import React, { useState } from 'react';
import { Form,Button, FormGroup, Input, Label } from 'reactstrap';

function Login(props) {
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented"+email + password);
      };
    return (
        <div>
            <div id="loginBody">
                <h1>{props.heading}</h1>
                <hr/>
                
                <Form  onSubmit={onSubmit}>
                    <FormGroup floating>
                        <Input id="email" name="email" placeholder="Email" type="email" onChange={(event)=>{setEmail(event.target.value)}} required/>
                        <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="password" name="password" placeholder="Password" type="password" onChange={(event)=>{setPassword(event.target.value)}}  required/>
                        <Label for="password">Password</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default Login;
