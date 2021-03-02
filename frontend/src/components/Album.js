import React from 'react'

export default function Album({ album_name, artist_name, cover_image, release_date }) {
    return (
        <div className="album">
            <h2>{album_name}</h2>
            <img src={cover_image} alt={album_name} />
            <h3>{artist_name}</h3>
            <h4>{release_date}</h4>
        </div>
    )
}
