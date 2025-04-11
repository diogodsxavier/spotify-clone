import { Track } from "../types/spotify";

interface TrackListProps {
  tracks: Track[];
  onPlay: (previewUrl: string) => void;
}

const TrackList = ({ tracks }: TrackListProps) => {
  console.log("Músicas recebidas no TrackList:", tracks);

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-2xl">
      {tracks.length === 0 ? (
        <p className="text-gray-500 text-center">Nenhuma música encontrada.</p>
      ) : (
        tracks.map((track) => (
          <div
            key={track.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
            </div>
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Ouvir no Spotify
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default TrackList;