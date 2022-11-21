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

    also_known_as?: string[]
    biography?: string
    birthday?: string
    deathday?: string
    homepage?: string
    imdb_id?: string
    place_of_birth?: string
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
    job: string
}

export interface ICredits {
    id: number
    cast: Actor[]
    crew: Producer[]
}

export interface Genre {
    id: number
    name: string
}
export interface IMovie {
    id: string
    name?: string
    title: string
    original_title: string
    original_language: string
    adult: boolean

    poster_path: string
    backdrop_path: string

    release_date: string
    vote_average: number
    vote_count: number
    overview: string

    runtime?: number
    genres?: Genre[]
    media_type?: string
}