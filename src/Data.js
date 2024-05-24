import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Data() {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        console.log("requested...");
        const response = await axios.get('https://livetv-njf6.onrender.com/tv');
        await setChannel(response.data);
        console.log(response.data)
      } catch (err) {
        //setError(err);
        console.log(err);
      } finally {
      }
    };

    fetchData();
  }, []); 

  return (
    <>{JSON.stringify(channel)}</>
  );
}

export default Data;