import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";


function Signup(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log({
            fname, lname, username, email, password, passwordAgain
        });
    }

    return (
        <div className="container">
            <center>
                <div className="box">
                    <div className="col-6 register">
                        <h1>Regsiter new user</h1><hr/>
                        <form onSubmit={onSubmitHandler}>
                            <TextField onChange={(e)=> setFname(e.target.value)} type="text" label="First Name" variant="filled" fullWidth required /><br/>
                            <TextField onChange={(e)=> setLname(e.target.value)} type="text" label="Last Name" variant="filled" fullWidth required /><br/>
                            <TextField onChange={(e)=> setUsername(e.target.value)} type="text" label="Username" variant="filled" fullWidth required/><br/>
                            <TextField onChange={(e)=> setEmail(e.target.value)} type="email" label="Email Address" variant="filled" fullWidth required/><br/>
                            <TextField onChange={(e)=> setPassword(e.target.value)} type="password" label="Password" variant="filled" fullWidth required/><br/>
                            <TextField onChange={(e)=> setPasswordAgain(e.target.value)} type="password" label="Confirm Password" variant="filled" fullWidth required/><br/>

                            <Button type="submit" variant="contained" size="large" style={{background:"#674fa3"}} fullWidth>
                                <i className="fa fa-user-plus" style={{paddingRight:"10px"}}></i>
                                Register user
                            </Button>
                        </form>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Signup;