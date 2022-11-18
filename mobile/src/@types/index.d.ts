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