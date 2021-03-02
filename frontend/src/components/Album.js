import React from 'react'
import '../App.css';


export default function Album({ album_name, artist_name, cover_image, release_date, name, artist, image, url}) {

    const backend = () => {
        return (
            <>
                <h2>{album_name}</h2>
                <img src={cover_image} alt={album_name} />
                <h3>{artist_name}</h3>
                {/* <h4>{release_date}</h4> */}
            </>
        )
    }
    
    const lastFM = () => {
        return (
            <>
                <a href={url}><h2>{name}</h2></a>
                <img src={image[3]["#text"]} alt={name} />
                <h3>{artist.name}</h3>
            </>
        )
    }

    return (
        <div className="album">
            {
                name
                ? lastFM()
                : backend()
            }            
        </div>
    )
}
