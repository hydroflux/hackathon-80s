import React from 'react'
import Album from '../components/Album'

export default function AlbumContainer({ albums }) {

    const showAlbums = () => {
        return albums.map( album => {
            return <Album key={album.id} {...album}/>
        })
    }

    return (
        <div className="album-container">
            {showAlbums()}
        </div>
    )
}
