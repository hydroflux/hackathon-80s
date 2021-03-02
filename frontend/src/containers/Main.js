import AlbumContainer from './AlbumContainer'

import '../App.css';
import FavoritesContainer from './FavoritesContainer';
import AddAlbum from '../components/AddAlbum';
import ToggleFavorites from '../components/ToggleFavorites';

export default function Main({ albums, searchArtist, showFavorites, toggle, favorites, add, remove }) {

    const artistSearch = () => {
        return (
            <>
                <AddAlbum searchArtist={searchArtist}/>
                <AlbumContainer add={add} albums={albums}/>
            </>
        )
    }

    return (
        <main>
            <ToggleFavorites showFavorites={showFavorites} toggle={toggle}/>
            { 
                showFavorites
                ? <FavoritesContainer remove={remove} favorites={favorites}/>
                : artistSearch()
            }
        </main>
    )
}
