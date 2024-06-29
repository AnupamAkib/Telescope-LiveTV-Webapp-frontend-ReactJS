import { useNavigate } from "react-router-dom";

function Channel(props){
    const navigate = useNavigate();

    const cardClickHandler = () => {
        localStorage.setItem("ch", props.channelName);
        navigate("/watch/"+props.liveURL);
    }

    return (
        <a onClick={cardClickHandler}>
            <div className="left tvcard-col-3">
                <div className="tvCard">
                    <img src={props.img} className="chLogo"/><br/>
                    <font className="channelName"><b>{props.channelName}</b></font>
                </div>
            </div>
        </a>
    );
}

export default Channel;