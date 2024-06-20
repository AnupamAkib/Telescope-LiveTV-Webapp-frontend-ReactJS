import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();


    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/");
        }
    }, []);
    
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const [isLoading, setLoading] = useState(false);

    const toast = require("./toast");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(password != passwordAgain){
            toast.msg("Password didn't match", "red", 3000);
            return;
        }

        setLoading(true);

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
            firstName : fname,
            lastName : lname,
            username : username,
            password : password,
            emailAddress : email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resposnse) => {
            let data = resposnse.data;
            localStorage.clear();
            localStorage.setItem("token", data.accessToken);
            toast.msg("Successfully registered. A verfication link has been sent to your email", "green", 3000);
            navigate("/");
        },
        (err) => {
            toast.msg(err.response.data.message, "red", 2500);
            setLoading(false);
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

                            <Button type="submit" variant="contained" size="large" style={isLoading? {} : {color:"white",background:"#674fa3"}} disabled={isLoading} fullWidth>
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