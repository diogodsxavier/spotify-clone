import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiResponse, Track } from "./types/spotify";
import { useAuth } from "./hooks/useAuth";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Player from "./components/Player";
import TrackList from "./components/TrackList";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

function Callback() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Callback iniciado");
    console.log("Hash da URL:", window.location.hash);

    const hash = window.location.hash.substring(1); // Remove o '#' do início
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    console.log("Token extraído:", accessToken);

    if (accessToken) {
      localStorage.setItem("spotify_token", accessToken);
      setToken(accessToken);

      console.log("Token salvo no localStorage e estado atualizado");

      // Redireciona para a página principal
      navigate("/");
      console.log("Redirecionando para a página principal");
    } else {
      console.error("Token de acesso não encontrado na URL.");
    }
  }, [setToken, navigate]);

  return <div>Redirecionando...</div>;
}

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<string>("");
  const { token, logout } = useAuth();

  useEffect(() => {
    console.log("Token atual no estado:", token);
  }, [token]);

  const handleSearch = async (query: string) => {
    if (!token || !query) {
      console.warn("Busca não realizada: token ou query ausente");
      return;
    }

    try {
      console.log("Realizando busca por:", query);
      const response = await axios.get<ApiResponse>(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Resposta da API do Spotify:", response.data);
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    }
  };

  const loginToSpotify = () => {
    const redirectUri =
      import.meta.env.MODE === "production"
        ? "https://spotify-clone-self-ten.vercel.app/callback" // Ambiente de produção
        : "http://localhost:5173/callback"; // Ambiente local

    const scopes = "user-read-private user-read-email";

    const url = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${scopes}&response_type=token`;
    console.log("URL de autenticação gerada:", url);

    window.location.href = url;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
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
                  onPlay={(url) => setCurrentTrack(url || "")}
                />
                <Player previewUrl={currentTrack} />

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
        }
      />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  );
}

export default App;
