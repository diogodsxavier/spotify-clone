import { useState } from 'react'
import './App.css'
import { ApiResponse, Track } from './types/spotify';
import { useAuth } from './hooks/useAuth';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Player from './components/Player';

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

  return (
    <div>
      {!token ? (
        <button onClick={() => window.location.href = 'http://localhost:8888/login'}>
          Login com Spotify
        </button>
      ) : (
        <>
          <button onClick={logout}>Logout</button>
          <SearchBar onSearch={handleSearch} />
          <TrackList
            tracks={tracks}
            onPlay={(url) => setCurrentTrack(url)}
          />
          <Player previewUrl={currentTrack} />
        </>
      )}
    </div>
  );
}

export default App
