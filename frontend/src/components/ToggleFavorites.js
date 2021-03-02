import React from 'react'

import '../App.css';

export default function ToggleFavorites({ toggle, showFavorites }) {
    return (
        <>
            <span className="toggle-favorites">
                <button className="button" onClick={toggle}>
                    {
                        showFavorites
                        ? "Gag Me With A Spoon"
                        : "Bodacious Tunes"
                    }
                </button>
            </span>
        </>
    )
}
