import React from "react";

function Videodetails({ video }) {

    if(!video)
        return <div></div>

    const url = "https://www.youtube.com/embed/" + video.id.videoId;

    return (
        <div id="video-container" className="video-detail row">
            <div id="videobox" className="embed-responsive embed-responsive-16by9">
                <iframe id="video" allowFullScreen={ true } className="embed-responsive-item" src={ url } title={ video.snippet.title } />
            </div>
            <div id="video-title">{ video.snippet.title }</div><hr id ="line1" className="my-5" />
            <div id="video-description">{ video.snippet.description }</div>
        </div>
    );

}

export default Videodetails;