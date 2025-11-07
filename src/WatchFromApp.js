import { useLocation  } from 'react-router-dom';

const WatchFromApp = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const videoUrl = queryParams.get("url");

    return (
        <div id="iframe-container">
            <iframe 
                src={`${videoUrl}?autoplay=1`} 
                allow="autoplay; encrypted-media" 
                height={window.innerHeight} 
                width="100%" 
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchFromApp;