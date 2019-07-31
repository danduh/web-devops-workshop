export interface Cast {
    id: string;
    name: string;
}

export interface Movie {
    id: string;
    title: string;
    poster: string;
    year: number;
    rating: number;
    cast: Cast[];
    description: string;
}
