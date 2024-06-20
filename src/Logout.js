import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

function Logout(){
    const navigate = useNavigate();

    const toast = require("./toast");

    useEffect(()=>{
        localStorage.clear();
        toast.msg("You are logged out", "red", 2500);
        navigate("/");
    }, []);

    return (
        <>Logging out...</>
    );
}

export default Logout;