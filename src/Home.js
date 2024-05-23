import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Channel from "./Channel";

function Home() {
  const [channel, setChannel] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        console.log("requested...");
        const response = await axios.get('https://api.apify.com/v2/acts/apify~puppeteer-scraper/runs/last/dataset/items?token=apify_api_A2Gxh0PYVUL1pc6XHmHDvk53I1wlaf0Mp3dV');
        if(response.data.length > 0){
          await setChannel(response.data[0].videos);
          await setLastUpdate(response.data[0].lastExecution);
          console.log(response.data[0].videos);
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
    <div className="container">
      <h1>Bangla Live TV</h1>
      {
        isLoading? 
        <h3>
          Fetching data...
        </h3> 
        :
        <>
          <b>Last Update:</b> {lastUpdate} <br/>
          {tv.length} Channel Found!<br/>
          <div className="App">
            {tv}
          </div>
        </>
      }
    </div>
  );
}

export default Home;