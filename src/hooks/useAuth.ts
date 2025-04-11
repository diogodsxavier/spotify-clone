import { useEffect, useState } from "react";

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // Extrai o hash da URL
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");

        if (accessToken) {
            // Armazena o token no localStorage
            localStorage.setItem("spotify_token", accessToken);
            setToken(accessToken);

            // Remove o hash da URL para limpar a barra de endereço
            window.history.replaceState({}, document.title, window.location.pathname);
        } else {
            // Recupera o token do localStorage, se existir
            const storedToken = localStorage.getItem("spotify_token");
            if (storedToken) {
                setToken(storedToken);
            }
        }
    }, []);

    const logout = () => {
        // Remove o token do localStorage e limpa o estado
        localStorage.removeItem("spotify_token");
        setToken(null);
    };

    return { token, setToken, logout };
};
