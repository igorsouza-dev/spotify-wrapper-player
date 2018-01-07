import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumList = document.getElementById('album-list');
const albums = spotify.search.albums('Incubus');

albums.then(data => renderAlbums(data.albums.items, albumList));

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

const tracksInfo = document.getElementById('album-musics');
album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, tracksInfo));
