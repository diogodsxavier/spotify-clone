import { useEffect, useRef, useState } from "react";

interface PlayerProps {
    previewUrl: string;
}

const Player = ({ previewUrl }: PlayerProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.src = previewUrl;
        if (isPlaying) audioRef.current.play();
    }, [previewUrl, isPlaying]);

    return (
        <div>
            <audio ref={audioRef} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "⏸ Pausar" : "▶ Reproduzir"}
            </button>
        </div>
    );
};

export default Player;