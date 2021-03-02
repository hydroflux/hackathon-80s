import React from 'react'
import Album from '../components/Album'
import '../App.css';

export default function AlbumContainer({ albums }) {

    const showAlbums = () => {
        return albums.map( album => {

            var key
            album.id
            ? key = album.id
            : key = album.name

            return (
                <Album 
                    key={key}
                    {...album}
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
