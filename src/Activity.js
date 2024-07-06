import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Activity(){
    const navigate = useNavigate();

    const [activity, setActivity] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("ALL");
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");
    const toast = require("./toast");

    useEffect(()=>{
        setLoading(true);
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/activity/getall?username=${selectedUser}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response.data);
            setUsers(response.data.allUser);
            setActivity(response.data.topActivities);
            setLoading(false)
        },
        (err) => {
            if(err && err.response && err.response.data && err.response.data.message){
                toast.msg(err.response.data.message, "red", 3200);
            }
            navigate("/");
        });
    }, [selectedUser]);

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    return (
        <div className="col-6 container">
            <div style={{marginTop:"5px"}}> </div>
            <h2 align="center">{users.length} users found!</h2>
            <font style={{fontSize:"large", marginRight:"10px"}}>Select an user:</font>
            <select value={selectedUser} onChange={handleUserChange} style={{width:"150px"}}>
                <option value="ALL">ALL</option>
                {users.map((user, index) => (
                    <option key={index} value={user}>{user}</option>
                ))}
            </select>
            <hr/>
            <div>
                {
                    loading? 
                    <Loading/> 
                    :
                    <>
                        <h4>{activity.length} activities found for '{selectedUser}'</h4><hr/>
                        {activity.map((user, idx)=> (
                            <ActivityCard fullName={user.fullName} activity={user.activity} time={user.timeDate} key={idx}/>
                        ))}
                    </>
                }
            </div>
        </div>
    );
}

function ActivityCard(props){
    return (
        <div style={{backgroundColor:"#f0f0f0", padding:"7px", margin:"7px", borderRadius:"7px"}}>
            <font size="2">{props.time}</font>
            <br/>
            <b>{props.fullName}</b> {props.activity}
        </div>
    );
}

function Loading(){
    return (
        <div style={{paddingTop:"20vh"}}>
          <center><CircularProgress/><br/>Please Wait</center>
        </div>
    );
}

export default Activity;