import './App.css';

import React, { Component } from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

class App extends Component {

  
  // artist = "cher"

  // Artist Search

  // Album Search
  // http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${this.apiKey}&artist=${this.artist}&album=${this.album}&format=json

  state = {
    apiKey: "c3238609982efde4e01b99b0caeeb18a",
    albums: []
  }

  backendURL = `http://localhost:3000/albums`

  componentDidMount(){
    fetch(this.backendURL)
      .then( response => response.json() )
      .then( albums => this.setState({ albums }) )
  }

  
  searchArtist = event => {
    event.preventDefault()

    const artist = event.target.artist.value
  
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${this.state.apiKey}&format=json`)
        .then( response => response.json() )
        .then( topAlbums => {
          this.setState({ albums: topAlbums.topalbums.album})
          // console.log(topAlbums.topalbums)
        })
    
    this.setState({name: ''})
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          albums={this.state.albums}
          searchArtist={this.searchArtist}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
