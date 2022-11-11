export interface Genre {
    id: number
    name: string
}
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
    genres?: Genre[]
}

export interface Actor {
    adult: boolean
    gender: number
    id: number
    cast_id: number
    credit_id: string
    order: number
    known_for_department: string
    original_name: string
    name: string
    character: string
    popularity: number
    profile_path: string
}

export interface Producer {
    adult: boolean
    gender: number
    id: number
    credit_id: string

    known_for_department: string
    original_name: string
    name: string

    popularity: number
    profile_path: string
    department: string
    job: 'Director' | 'Writer'
}

export interface ICredits {
    id: number
    cast: Actor[]
    crew: Producer[]
}

export interface IVideo {
    id: string
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
}
