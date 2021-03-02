import React from 'react'
import AlbumContainer from './AlbumContainer'

export default function Main({ albums }) {
    return (
        <div>
            <AlbumContainer albums={albums}/>
        </div>
    )
}
