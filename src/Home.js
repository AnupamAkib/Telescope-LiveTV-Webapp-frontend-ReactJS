import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Channel from "./Channel";

function Home() {
  const [channel, setChannel] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [apiInfo, setApiInfo] = useState("");

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        console.log("requested...");
        const response = await axios.get('https://livetv-njf6.onrender.com/tv');
        //const response = await axios.get('/data');
        if(response.data.length > 0){
          await setChannel(response.data[0].videos);
          await setLastUpdate(response.data[0].lastExecution);
          await setApiInfo(response.data[0].broker);
          //console.log(response.data[0].videos);
        }
      } catch (err) {
        //setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  let tv = [];

  for(let i=0; i<channel.length; i++){
    tv.push(
      <Channel liveURL={channel[i].url.split('/')[4]} channelName={channel[i].channelName} img={channel[i].channelLogo.length>1? channel[i].channelLogo : "/live.jpg"}/>
    );
  }


  return (
    <div className="App">
      {
        isLoading? 
        <h3>
          Fetching data...
        </h3> 
        :
        <>
          <h2 align="center">{tv.length} Channel Found!</h2>
          <div className="container">
            {tv}
          </div>
        </>
      }
    </div>
  );
}

export default Home;