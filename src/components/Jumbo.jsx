import React from "react";

function Jumbo() {
  return (
    <div className="navigation jumbotron">
        <p className="brand px-2">
          Hyperloop
        </p>
        <img
          className="logo"
          src="https://img.icons8.com/nolan/64/react-native.png"
          alt="HyperLoop"
        />
      <hr className="my-4" />
    </div>
  );
}

export default Jumbo;
