import { useNavigate } from "react-router-dom";

function Channel(props){
    const navigate = useNavigate();
    return (
        <a onClick={()=>navigate("/watch/"+props.liveURL)}>
            <div className="left tvcard-col-3">
                <div className="tvCard">
                    <img src={props.img} width="120" height="120"/><br/>
                    <font className="channelName"><b>{props.channelName}</b></font>
                </div>
            </div>
        </a>
    );
}

export default Channel;