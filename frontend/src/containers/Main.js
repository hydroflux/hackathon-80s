import AlbumContainer from './AlbumContainer'

import '../App.css';
import AddAlbum from '../components/AddAlbum';

export default function Main({ albums, api, searchArtist }) {
    return (
        <main>
            <AddAlbum searchArtist={searchArtist}/>
            <AlbumContainer albums={albums}/>
        </main>
    )
}
