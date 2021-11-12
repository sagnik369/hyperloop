import React from "react";

function Jumbo() {
  return (
    <div id="navigation" className="navigation jumbotron">
        <h1 className="brand px-2">
          Hyperloop
        </h1>
        <img
          className="logo"
          src="https://img.icons8.com/nolan/64/react-native.png"
          alt="HyperLoop"
        />
        <button className="night-mode-toggle" onClick={ toggleMode }>
          <svg id="bulb" className="svg-element" viewBox="0 0 489.981 489.981">
            <path d="M189.363,481.081h24.5c3.9,5.1,16.3,8.9,31.1,8.9s27.2-3.9,31.1-8.9h24.5v-86.3h-111.2V481.081z"/>
            <path d="M234.463,0.381c-65.7,5.1-119,56.8-125.6,122.5c-3.9,37.3,7.8,71.9,28.4,98.8c32.7,41.6,51.7,92.2,51.7,145.1v2.3h45.9
              v-176.6l-3.1,3.1c-4.3,3.6-10.1,3.9-14,0l-20-20c-3.9-3.9-4.1-10.6-0.1-14.4c3.9-3.7,10-3.7,13.8,0.2l13.2,13.2l13.3-13.3
              c3.8-3.8,10-3.8,13.8,0l13.3,13.3l13-13c3.9-3.9,10.6-4.1,14.4-0.1c3.7,3.9,3.7,10-0.2,13.8l-20.2,20.2c-3.9,3.9-10.1,3.9-14,0
              l-3.1-3.1v176.6h46v-2.3c0-52.9,19.1-103.4,51.7-144.7c18.3-23.3,29.2-52.5,29.2-84.8
              C381.863,57.881,314.963-5.519,234.463,0.381z"/>
          </svg>
        </button>
      <hr className="my-4" />
    </div>
  );
}

function toggleMode() {
  document.body.classList.toggle("dark-body");
  document.getElementById("navigation").classList.toggle("dark-navigation");
  document.getElementById("bulb").classList.toggle("dark-bulb");
  document.getElementById("search-bar").classList.toggle("dark-search-bar");
  document.getElementById("video-box-container").classList.toggle("dark-video-box-container");
  document.getElementById("hero").classList.toggle("dark-hero");
  [...document.getElementsByClassName("card")].forEach(el =>  el.classList.toggle("dark-card"));
  document.getElementById("footer").classList.toggle("dark-footer");
}

export default Jumbo;
