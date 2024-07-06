
import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Watch(){
    const navigate = useNavigate();
    const { url } = useParams();
    const channelName = localStorage.getItem("ch");
    const token = localStorage.getItem("token");
    const toast = require("./toast");

    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/tv/checkAvailability`, 
            {
                channelName
            }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {},
        (err) => {
            if(err && err.response && err.response.data && err.response.data.message){
                toast.msg(err.response.data.message, "red", 3200);
            }
            navigate("/");
        });
    }, []);

    return (
        <div id="iframe-container">
            <iframe 
                src={`https://www.youtube.com/embed/${url}?autoplay=1`} 
                allow="autoplay; encrypted-media" 
                height={window.innerHeight} 
                width="100%" 
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
        
    );
}

export default Watch;