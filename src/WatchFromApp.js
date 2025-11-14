import { useLocation  } from 'react-router-dom';

const WatchFromApp = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const videoUrl = queryParams.get("url");

    return (
        <div id="" style={{"backgroundColor": 'black'}}>
            <iframe 
                src={`${videoUrl}?autoplay=1`} 
                allow="autoplay" 
                height={window.innerHeight} 
                width="100%" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchFromApp;