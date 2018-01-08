import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

const tracksInfo = document.getElementById('album-musics');

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, tracksInfo));
}
export default function selectAlbumTrigger() {
  albumList.addEventListener('click', (e) => {
    makeRequest(e.target.getAttribute('data-album-id'));
  });
}
