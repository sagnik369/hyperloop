import React from "react";

function Videodetails({ video }) {

    if(!video)
        return <div></div>

    const url = "https://www.youtube.com/embed/" + video.id.videoId;

    return (
        <div id="video-box-container" className="video-box-container row">
            <div className="video-box embed-responsive embed-responsive-16by9">
                <iframe className="video embed-responsive-item" src={ url } title={ video.snippet.title } allowFullScreen={ true }/>
            </div>
            <div className="video-title">{ video.snippet.title }</div><hr className="line1 my-5" />
            <div className="video-description">{ video.snippet.description }</div>
        </div>
    );

}

export default Videodetails;