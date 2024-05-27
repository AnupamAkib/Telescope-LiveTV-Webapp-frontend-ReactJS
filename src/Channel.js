function Channel(props){
    return (
        <a href={"/watch/"+props.liveURL}>
            <div className="left col-3">
                <div className="tvCard">
                    <img src={props.img} width="120" height="120"/><br/>
                    <font className="channelName"><b>{props.channelName}</b></font>
                </div>
            </div>
        </a>
    );
}

export default Channel;