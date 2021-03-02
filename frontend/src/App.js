import './App.css';

import React, { Component } from 'react';
import AlbumContainer from './containers/AlbumContainer';

class App extends Component {

  // apiKey = "c3238609982efde4e01b99b0caeeb18a"
  // artist = "cher"

  // Artist Search
  // /2.0/?method=artist.getinfo&artist=Cher&api_key=${this.apiKey}&format=json

  // Album Search
  // http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${this.apiKey}&artist=${this.artist}&album=${this.album}&format=json

  state = {
    albums: []
  }

  backendURL = `http://localhost:3000/albums`

  componentDidMount(){
    fetch(this.backendURL)
      .then( response => response.json() )
      .then( albums => this.setState({ albums }) )
  }

  render() {
    return (
      <div>
        <AlbumContainer albums={this.state.albums}/>
      </div>
    );
  }
}

export default App;
