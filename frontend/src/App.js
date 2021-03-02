import './App.css';

import React, { Component } from 'react';

class App extends Component {

  apiKey = "c3238609982efde4e01b99b0caeeb18a"
  artist = "cher"

  // Artist Search
  // /2.0/?method=artist.getinfo&artist=Cher&api_key=${this.apiKey}&format=json

  componentDidMount(){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${this.apiKey}&artist=${this.artist}&album=${this.album}&format=json`)
      .then( response => response.json() )
      .then( console.log )
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
