import React from "react";

function Videolist({ video, onVideoSelect }) {


        return (
            <div onClick={ () => onVideoSelect(video) } id="card" className="card m-5">
                <img src={ video.snippet.thumbnails.default.url } alt={ video.snippet.title } className="card-img-top img-fluid" id="thumbnail" />
                <div id="card-body">
                    <hr id ="line" className="my-4" />
                    <p id="title" className="card-title">{ video.snippet.title }</p>
                </div>
            </div>
        );
}

export default Videolist;