import { Track } from "../types/spotify";

interface TrackListProps {
    tracks: Track[];
    onPlay: (previewUrl: string) => void;
}

const TrackList = ({ tracks, onPlay }: TrackListProps) => {};

export default TrackList;

// Continue the code from here to complete the TrackList component