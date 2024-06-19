import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { CheckBox } from "@mui/icons-material";


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log({
            username, password
        });
    }

    return (
        <div className="container">
            <center>
                <div className="box">
                    <div className="col-5 register">
                        <img src="/icon.jpg" width="70px" style={{borderRadius:"15px", marginBottom:"15px"}}/>
                        <br/>
                        <h1>Login to Telescope</h1><hr/>
                        <form onSubmit={onSubmitHandler}>
                            <TextField onChange={(e)=> setUsername(e.target.value)} type="text" label="Username" variant="filled" fullWidth required/><br/>
                            <TextField onChange={(e)=> setPassword(e.target.value)} type="password" label="Password" variant="filled" fullWidth required/><br/>
                            <Button type="submit" variant="contained" size="large" style={{background:"#674fa3"}} fullWidth>
                                <i className="fa fa-sign-in" style={{paddingRight:"10px"}}></i>
                                Login
                            </Button>
                        </form><br/>
                        <Button fullWidth>Forgot your password?</Button>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Login;