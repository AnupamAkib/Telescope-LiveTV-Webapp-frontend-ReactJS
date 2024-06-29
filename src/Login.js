import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/");
        }
    }, []);

    const toast = require("./toast");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setLoading(true);

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
            username : username,
            password : password
        })
        .then((resposnse) => {
            let data = resposnse.data;
            localStorage.clear();
            localStorage.setItem("token", data.accessToken);
            toast.msg("Login successful", "green", 2500);
            navigate("/");
        },
        (err) => {
            toast.msg(err.response.data.message, "red", 2500);
            setLoading(false);
        });
    }

    const forgetPasswordClicked = () => {
        navigate("/password_recovery");
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
                            <Button type="submit" variant="contained" size="large" style={isLoading? {} : {color:"white",background:"#674fa3"}} disabled={isLoading} fullWidth>
                                <i className="fa fa-sign-in" style={{paddingRight:"10px"}}></i>
                                Login
                            </Button>
                        </form><br/>
                        <Button onClick={forgetPasswordClicked} fullWidth>Forgot your password?</Button>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Login;