import { useEffect, useState } from "react";

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");

        if (accessToken) {
            localStorage.setItem("spotify_token", accessToken);
            setToken(accessToken);
            window.history.replaceState({}, document.title, window.location.pathname);
        } else {
            setToken(localStorage.getItem('spotify_token'));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("spotify_token");
        setToken(null);
    };

    return { token, logout };
};
