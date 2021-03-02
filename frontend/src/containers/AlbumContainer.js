import React from 'react'
import Album from '../components/Album'
import '../App.css';

export default function AlbumContainer({ albums, add }) {

    const showAlbums = () => {
        return albums.map( album => {
            return (
                <Album
                    key={album.name}
                    clickAction={add}
                    album={album}
                />
            )
        })
    }

    return (
        <div className="album-container">
            {showAlbums()}
        </div>
    )
}
