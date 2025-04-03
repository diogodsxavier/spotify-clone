export interface Track {
    id: string;
    name: string;
    artists: Array<{ name: string }>;
    album: { images: Array<{ url: string }> };
    duration_ms: number;
    preview_url: string;
}

export interface ApiResponse {
    tracks: {
        items: Track[];
    };
}