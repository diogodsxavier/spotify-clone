import { useState, useEffect } from "react";
import { ApiResponse, Track } from "./types/spotify";
import { useAuth } from "./hooks/useAuth";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Player from "./components/Player";
import TrackList from "./components/TrackList";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<string>("");
  const { token, logout } = useAuth();

  useEffect(() => {
    localStorage.removeItem("spotify_token");
  }, []);

  const handleSearch = async (query: string) => {
    console.log("Token atual:", token);
    if (!token || !query) return;

    try {
      const response = await axios.get<ApiResponse>(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Resposta completa da API:", response.data);

      const tracks = response.data.tracks.items;
      console.log("Músicas retornadas:", tracks);
      setTracks(tracks);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Erro ao buscar músicas:",
          error.response?.data || error.message
        );
      } else {
        console.error("Erro inesperado:", error);
      }
    }
  };

  const loginToSpotify = () => {
    const redirectUri = encodeURIComponent(
      import.meta.env.MODE === "production"
        ? "https://spotify-clone-self-ten.vercel.app//callback"
        : "http://localhost:5173/callback"
    );
    const scopes = "user-read-private user-read-email";

    const url = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;
    console.log("URL de autenticação:", url);

    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      {!token ? (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-full font-bold text-lg transition duration-300 hover:bg-green-600"
          onClick={loginToSpotify}
        >
          Login com Spotify
        </button>
      ) : (
        <>
          <div className="w-full max-w-md px-4 mt-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <TrackList
            tracks={tracks}
            onPlay={(url) => {
              if (url) {
                setCurrentTrack(url);
              } else {
                console.warn("Esta música não possui uma prévia disponível.");
              }
            }}
          />
          <Player previewUrl={currentTrack} />

          {/* Botão de logout reposicionado para o final da página em telas pequenas */}
          <div className="mt-8 w-full flex justify-center mb-8">
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-full font-bold text-sm md:text-lg transition duration-300 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
