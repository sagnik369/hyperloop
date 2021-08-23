import React from "react";
import { Component } from "react/cjs/react.production.min";

class Searchbar extends Component{

  constructor(props) {
    super(props);
    this.state = { term: ' ' };
  }

  render() {

    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input id="input-field" className=" form-control bg-light text-center text-dark" placeholder="Search" onChange={ (event) => this.onInputChange(event.target.value) } /></div>
          </div>
      </div>
    );

  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchChange(term);
  }

};

export default Searchbar;