const loginToSpotify = () => {
    const clientId = import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = import.meta.env.REACT_APP_SPOTIFY_REDIRECT_URI;
    const scopes = encodeURIComponent('user-read-private user-read-email');
    
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
    
    window.location.href = authUrl;
};

export default loginToSpotify;
// This is a placeholder component for authentication logic.