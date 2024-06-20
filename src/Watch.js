
import React from "react";
import { useParams } from 'react-router-dom';
import { useState } from "react";

function Watch(){
    const { url } = useParams();
    console.log(url)
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