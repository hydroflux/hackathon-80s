import React from 'react'
import Album from '../components/Album'
import '../App.css';

export default function FavoritesContainer({ favorites, remove }) {
    const showFavorites = () => {

        return favorites.map( favorite => {

            return (
                <Album
                    key={favorite.id}
                    clickAction={remove}
                    album={favorite}
                />
            )
        })
    }

    return (
        <div className="album-container">
            {showFavorites()}
        </div>
    )
}