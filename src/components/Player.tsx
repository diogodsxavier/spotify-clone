import { useEffect, useRef, useState } from "react";

interface PlayerProps {
    previewUrl: string | null;
}

const Player = ({ previewUrl }: PlayerProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!audioRef.current || !previewUrl) return;

        audioRef.current.src = previewUrl;
        if (isPlaying) audioRef.current.play();
    }, [previewUrl, isPlaying]);

    return (
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
            <audio ref={audioRef} />
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                disabled={!previewUrl}
                className={`px-4 py-2 text-white rounded-lg ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
                {isPlaying ? '⏸ Pausar' : '▶ Reproduzir'}
            </button>
        </div>
    );
};

export default Player;