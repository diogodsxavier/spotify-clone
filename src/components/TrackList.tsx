import { Track } from "../types/spotify";

interface TrackListProps {
  tracks: Track[];
  onPlay: (previewUrl: string) => void;
}

const TrackList = ({ tracks, onPlay }: TrackListProps) => {
  console.log("Músicas recebidas no TrackList:", tracks);

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {tracks.length === 0 ? (
        <p className="text-gray-500 text-center">Nenhuma música encontrada.</p>
      ) : (
        <p className="text-gray-500 text-center">
          Algumas músicas podem não ter prévias disponíveis.
        </p>
      )}
      {tracks.map((track) => (
        <div
          key={track.id}
          className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <img
            src={track.album.images[0]?.url}
            alt={track.name}
            className="w-16 h-16 rounded-lg"
          />
          <div className="flex-1 ml-4">
            <h3 className="text-lg font-semibold">{track.name}</h3>
            <p className="text-gray-600">
              {track.artists.map((artist) => artist.name).join(", ")}
            </p>
            {track.preview_url ? (
              <button
                className="px-4 py-2 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
                onClick={() => onPlay(track.preview_url!)}
              >
                ▶ Play
              </button>
            ) : (
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white rounded-lg bg-green-500 hover:bg-green-600"
              >
                Ouvir no Spotify
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;