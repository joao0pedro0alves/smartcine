export interface MovieSearchParams {
    url?: string
    title?: string
}

export interface MovieDetailParams {
    movieId: string
    title: string
}

export interface PersonDetailParams {
    personId: string
    name: string
    
    movieId?: string
    movieBackdrop?: string
}

export interface AppRootParamList {
    home: undefined
    favorites: undefined
    search: MovieSearchParams
    movieDetail: MovieDetailParams
    movieTrailer: MovieDetailParams

    personDetail: PersonDetailParams
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}
