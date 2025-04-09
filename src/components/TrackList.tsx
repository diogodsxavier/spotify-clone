import { Track } from "../types/spotify";

interface TrackListProps {
    tracks: Track[];
    onPlay: (previewUrl: string) => void;
}

const TrackList = ({ tracks, onPlay }: TrackListProps) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
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

                        <button
                            className={`px-4 py-2 text-white rounded-lg ${track.preview_url
                                    ? 'bg-blue-500 hover:bg-blue-600'
                                    : 'bg-gray-400'
                                }`}
                            onClick={() => {
                                if (track.preview_url) {
                                    onPlay(track.preview_url);
                                }
                            }}
                            disabled={!track.preview_url}
                        >
                            ▶ Play
                            {!track.preview_url && (
                                <span
                                    className="ml-2 text-gray-400"
                                >
                                    Preview não disponível
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrackList;