const loginToSpotify = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
    const scopes = encodeURIComponent('user-read-private user-read-email');
    
    console.log(clientId, redirectUri, scopes);
    
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
    
    window.location.href = authUrl;
};

export default loginToSpotify;
