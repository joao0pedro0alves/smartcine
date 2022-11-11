export interface IMovie {
    id: string
    title: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: number
    overview: string

    runtime?: number
    // genres?: Genre[]
}