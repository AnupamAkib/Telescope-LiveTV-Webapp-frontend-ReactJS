import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function VerifyEmail(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setLoading] = useState(true);

    const toast = require("./toast");

    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/verifyEmail?id=${id}`, {
            //no params
        })
        .then((resposnse) => {
            let data = resposnse.data;
            if(data.message == "success"){
                toast.msg(`User '${data.user}' is successfully verified`, "green", 3000);
            }
            else{
                toast.msg(data.message, "red", 2500);
            }
            navigate("/");
        },
        (err) => {
            toast.msg("Something went wrong. Please contact with admin team", "red", 2500);
            setLoading(false);
        });
    }, []);


    return (
        <div className="container">
            <br/>
            <center>
                {
                    isLoading? 
                    <>
                    <CircularProgress/>
                    <h3>Verifying user...</h3>
                    </> 
                    : 
                    "Sorry, we could not verify the user. Something went wrong!"
                }
            </center>
        </div>
    );
}

export default VerifyEmail;