import './App.css';

import React, { Component } from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

class App extends Component {

  state = {
    apiKey: "c3238609982efde4e01b99b0caeeb18a",
    albums: [],
    favorites: [],
    showFavorites: false
  }

  componentDidMount(){
    fetch(`http://localhost:3000/albums`)
      .then( response => response.json() )
      .then( favorites => this.setState({ favorites }) )
  }

  toggleFavorites = () => {
    this.setState({ showFavorites: !this.state.showFavorites })
  }

  addToFavorites = favorite => {
    const favoriteAlbum = this.state.favorites.find( fav => fav === favorite )

    if (!favoriteAlbum){
      this.setState({ favorites: [...this.state.favorites, favorite]}) 
    }

    fetch("http://localhost:3000/albums", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        album_name: favorite.name,
        artist_name: favorite.artist.name,
        cover_image: favorite.image[3]["#text"]
      })
    })
  }

  removeFromFavorites = favorite => {
    const newFavorites = this.state.favorites.filter( fav => fav !== favorite )

    this.setState({ favorites: newFavorites })

    fetch(`http://localhost:3000/albums/${favorite.id}`, {
      method: "DELETE"
    })
  }

  searchArtist = event => {
    event.preventDefault()

    const artist = event.target.artist.value

    if (artist){
      fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${this.state.apiKey}&format=json`)
        .then( response => response.json() )
        .then( topAlbums => {
          this.setState({ albums: topAlbums.topalbums.album})
        })
        .catch( console.log )
    
      this.setState({name: ''})
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          searchArtist={this.searchArtist}
          toggle={this.toggleFavorites}
          albums={this.state.albums}
          favorites={this.state.favorites}
          showFavorites={this.state.showFavorites}
          add={this.addToFavorites}
          remove={this.removeFromFavorites}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
