import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Channel from "./Channel";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { CircularProgress } from "@mui/material";


function Home() {
  const [channel, setChannel] = useState([]);
  const [channelCnt, setChannelCnt] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});

  const toast = require("./toast");

  useEffect(() => {
      setLoading(true);
      const token = localStorage.getItem("token");

      axios.get(`${process.env.REACT_APP_BACKEND_URL}/tv`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
          setLoading(false);
          const res = response.data[0];
          //console.log(res)
          setChannel(res.videos);
          setChannelCnt(res.channelCount);
          setMessage(res.message);
          setUser(res.user);
      },
      (err) => {
          setLoading(false);
          if(err && err.response && err.response.data && err.response.data.message){
            toast.msg(err.response.data.message, "red", 2500);
          }
      });
  }, []); 

  let tv = [];

  for(let i=0; i<channel.length; i++){
    tv.push(
      <Channel liveURL={channel[i].url.split('/')[4]} channelName={channel[i].channelName} img={channel[i].channelLogo.length>1? channel[i].channelLogo : "/live.jpg"}/>
    );
  }


  const greetings = () => {
    const d = new Date();
    let hour = d.getHours();
    if(hour > 19){
      return "Hello!";
    }
    else if(hour >= 16){
      return "Good evening!"
    }
    else if(hour >= 12){
      return "Good afternoon!";
    }
    else{
      return "Good morning!";
    }
  }

  if(isLoading){
    return (
      <div style={{paddingTop:"20vh"}}>
        <center><CircularProgress/><br/>Please Wait</center>
      </div>
    );
  }

  return (
    <div className="App">
        <div className="container">
          <Alert severity="success">
            {greetings()} <b>{user.fullName}</b>
          </Alert>

          {message!="success"? <Alert severity="error">{message}</Alert> : <Alert severity="success">User '{user.username}' is verified</Alert>}

          <h3 align="center" style={{paddingTop:"12px"}}>{tv.length} / {channelCnt} channels available!</h3>

          <div>
            {tv}
          </div>
        </div>
    </div>
  );
}

export default Home;