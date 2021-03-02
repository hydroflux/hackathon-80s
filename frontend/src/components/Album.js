import React from 'react'
import '../App.css';


export default function Album({ album, clickAction}) {

    const handleClick = () => {
        clickAction(album)
    }

    const backend = () => {
        return (
            <>
                <h2
                    className="vectro">{album.album_name}
                </h2>
                <img
                    onClick={handleClick}
                    src={album.cover_image}
                    alt={album.album_name}
                />
                <h3
                    className="vectro">
                    {album.artist_name}
                </h3>
            </>
        )
    }
    
    const lastFM = () => {
        return (
            <>
                <a href={album.url}>
                    <h2
                        className="vectro">
                        {album.name}
                    </h2>
                </a>
                <img 
                    onClick={handleClick}
                    src={album.image[3]["#text"]}
                    alt={album.name}    
                />
                <h3 
                    className="vectro">
                    {album.artist.name}
                </h3>
            </>
        )
    }

    return (
        <div className="album vectro-body">
            {
                album.name
                ? lastFM()
                : backend()
            }            
        </div>
    )
}
