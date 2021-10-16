import React from "react";
import { Component } from "react/cjs/react.production.min";
import Jumbo from "./Jumbo";
import Searchbar from "./Searchbar";
import Videodetails from "./Videodetails";
import Videolist from "./Videolist";
import Footer from "./Footer";
import YTSearch from "youtube-api-search";
import request from "sync-request";

const API_KEY = "AIzaSyDA_9NjW8fDDyMcft-ZxZXZNKJwg3hpaHc";

const res = request("GET", "https://random-word-api.herokuapp.com/word");
var ranWord = res.getBody().slice(2, -2);

class App extends Component {
  constructor(props) {
    super(props);
    this.videoSearch(ranWord);
    this.state = { videos: [], selectedVideo: null };
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) =>
      this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }

  render() {
    return (
      <div>
        <Jumbo />
        <Searchbar onSearchChange={(term) => this.videoSearch(term)} />
        <Videodetails video={this.state.selectedVideo} />
        <Videolist
          onSelectedVideo={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
