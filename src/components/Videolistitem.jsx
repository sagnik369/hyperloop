import React from "react";

function Videolist({ video, onVideoSelect }) {


        return (
            <div onClick={ () => onVideoSelect(video) } className="card m-5">
                <img src={ video.snippet.thumbnails.default.url } alt={ video.snippet.title } className="thumbnail card-img-top img-fluid" />
                <div className="card-body">
                    <hr className="line2 my-4" />
                    <p className="card-title">{ video.snippet.title }</p>
                </div>
            </div>
        );
}

export default Videolist;