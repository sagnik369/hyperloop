import React from "react";

function Jumbo() {
  return (
    <div id="navi" className="jumbotron">
      <div id="forflex">
        <p id="display" className="display-1 px-4">
          Hyperloop
        </p>
        <img
          id="logo"
          src="https://img.icons8.com/nolan/64/react-native.png"
          alt="HyperLoop"
        />
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default Jumbo;
