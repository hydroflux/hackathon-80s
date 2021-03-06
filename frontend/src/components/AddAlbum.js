import React, { Component } from 'react';

class AddAlbum extends Component {

    state = {
        artist: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <>
                <form 
                    onSubmit={this.props.searchArtist}
                    className="artist-search">
                    <input
                        className="artist-input"
                        type="text"
                        name="artist"
                        value={this.state.artist}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Bitchin Bands"
                    />
                </form>
            </>
        );
    }
}

export default AddAlbum;