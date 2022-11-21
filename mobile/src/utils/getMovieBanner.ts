import {Actor, Producer, IMovie} from '../@types'
import {THEMOVIEDB_BANNER_URL, THEMOVIEDB_CAST_PROFILE_URL} from '../config/themoviedb'

export function getMovieBanner(movie: IMovie, isPoster: boolean = false) {
    return (
        THEMOVIEDB_BANNER_URL +
        (isPoster ? movie?.poster_path : movie?.backdrop_path)
    )
}

export function getMovieCastPicture(person: Actor | Producer) {
    return (
        THEMOVIEDB_CAST_PROFILE_URL + person.profile_path
    )
}
