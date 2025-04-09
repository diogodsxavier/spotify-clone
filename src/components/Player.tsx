// components/Player.tsx
import { useEffect, useRef, useState } from 'react';

interface PlayerProps {
  previewUrl: string;
}

const Player = ({ previewUrl }: PlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  // Controle principal de reprodução
  useEffect(() => {
    const audio = audioRef.current;
    
    const handlePlay = async () => {
      try {
        if (previewUrl) {
          if (audio.src !== previewUrl) {
            audio.src = previewUrl;
            await audio.load();
          }
          await audio.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Erro ao reproduzir:', error);
        setIsPlaying(false);
      }
    };

    const handlePause = () => {
      audio.pause();
      setIsPlaying(false);
    };

    // Controle por estado
    isPlaying ? handlePlay() : handlePause();

    // Atualiza o tempo de reprodução
    audio.addEventListener('timeupdate', () => {
      if (audio.currentTime >= 29) { // Para após 30s (limite dos previews)
        handlePause();
        audio.currentTime = 0;
      }
    });

    // Limpeza
    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', () => {});
    };
  }, [isPlaying, previewUrl]);

  // Resetar estado quando a música muda
  useEffect(() => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0;
  }, [previewUrl]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        disabled={!previewUrl}
        className={`px-6 py-2 rounded-full font-bold ${
          previewUrl 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isPlaying ? '⏸ Pausar' : '▶ Reproduzir'}
      </button>
    </div>
  );
};

export default Player;



// import { useEffect, useRef, useState } from "react";

// interface PlayerProps {
//     previewUrl: string | null;
// }

// const Player = ({ previewUrl }: PlayerProps) => {
//     const audioRef = useRef<HTMLAudioElement | null>(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     useEffect(() => {
//         if (!audioRef.current) return;

//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;

//         if (previewUrl) {
//             audioRef.current.src = previewUrl;
//             if (isPlaying) {
//                 audioRef.current.play().catch(() => setIsPlaying(false));
//             }
//         }

//         setIsPlaying(false);
//     }, [previewUrl]);


//     const togglePlay = () => {
//         if (!audioRef.current) return;

//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play().catch(() => setIsPlaying(false));
//         }
//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
//             <audio ref={audioRef} />
//             <button
//                 onClick={togglePlay}
//                 disabled={!previewUrl}
//                 className={`px-4 py-2 text-white rounded-lg ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
//             >
//                 {isPlaying ? '⏸ Pausar' : '▶ Reproduzir'}
//             </button>
//         </div>
//     );
// };

// export default Player;