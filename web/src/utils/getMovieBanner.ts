import {IMovie} from '../@types'
import {THEMOVIEDB_BANNER_URL} from '../config/themoviedb'

export function getMovieBanner(movie: IMovie, isPoster: boolean = false) {
    return (
        THEMOVIEDB_BANNER_URL +
        (isPoster ? movie?.poster_path : movie?.backdrop_path)
    )
}
