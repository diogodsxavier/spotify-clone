import { useEffect, useRef } from "react";

interface PlayerProps {
  previewUrl: string;
}

const Player = ({ previewUrl }: PlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      if (previewUrl) {
        audioRef.current.src = previewUrl;
        audioRef.current
          .play()
          .catch(err => {
            console.error('Erro ao reproduzir o áudio:', err);
          });
      }
    }
  }, [previewUrl]);


  // const togglePlay = () => {
  //   if (!audioRef.current) return;

  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play().catch(() => setIsPlaying(false));
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      {previewUrl ? (
        <audio ref={audioRef} controls className="w-full">
          <source src={previewUrl} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      ) : (
        <p className="text-gray-500">Selecione uma música para reproduzir</p>
      )}
    </div>
  );
};

export default Player;