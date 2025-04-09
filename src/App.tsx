import { useState } from 'react'
import './App.css'
import { ApiResponse, Track } from './types/spotify';
import { useAuth } from './hooks/useAuth';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Player from './components/Player';
import TrackList from './components/TrackList';

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<string>('');
  const { token, logout } = useAuth();

  const handleSearch = async (query: string) => {
    if (!token || !query) return;

    try {
      const response = await axios.get<ApiResponse>(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error('Erro no busca:', error);
    }
  };

  const loginToSpotify = () => {
    const redirectUri = encodeURIComponent('http://localhost:5173/callback');
    const scopes = 'user-read-private user-read-email';

    window.location.href = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      {!token ? (
        <button
          className='px-4 py-2 bg-green-500 text-white rounded-full font-bold text-lg transition duration-300 hover:bg-green-600'
          onClick={loginToSpotify}
        >
          Login com Spotify
        </button>
      ) : (
        <>
          <button
            onClick={logout}
            className='absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-full font-bold text-lg transition duration-300 hover:bg-red-600'
          >
            Logout
          </button>

          <SearchBar onSearch={handleSearch} />
          <TrackList
            tracks={tracks}
            onPlay={(url) => setCurrentTrack(url || '')}
          />
          <Player previewUrl={currentTrack} />
          {console.log(currentTrack)}
          
        </>
      )}
    </div>
  );
}

export default App
