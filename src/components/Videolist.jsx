import React from "react";
import Videolistitem from "./Videolistitem";

function Videolist(props) {

    const videoitem = props.videos.map((video) => {
        return <Videolistitem onVideoSelect={ props.onSelectedVideo } key = { video.etag } video = { video } />;
    });

        return (
            <div className="hero-container">
                <div id="hero" className="hero">
                    { videoitem }
                </div>                
            </div>
        );
}

export default Videolist;