import { useRef, useEffect } from "react";

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
        audioRef.current.play().catch((err) => {
          console.error("Erro ao reproduzir o áudio:", err);
        });
      }
    }
  }, [previewUrl]);

  return (
    <div className="player mt-4">
      {previewUrl ? (
        <audio ref={audioRef} controls className="w-full">
          <source src={previewUrl} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      ) : null}
    </div>
  );
};

export default Player;