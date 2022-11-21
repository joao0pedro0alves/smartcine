import React, {createContext, useCallback} from "react"

import {IMovie} from "../@types"
import {FAVORITE_MOVIES_KEY} from "../constants/storageKeys"

import {usePersistedState} from "../hooks/usePersistedState"
import {uniqueArray} from "../utils/uniqueArray"

interface FavoritesContextData {
    movies: {
        data: IMovie[]
        loading: boolean,
        add: (movie: IMovie) => void
        remove: (movieId: IMovie['id']) => void
        toogle: (movie: IMovie) => void
        clear: () => void
    }
}

interface FavoritesProviderProps {
    children: React.ReactNode
}

export const FavoritesContext = createContext({} as FavoritesContextData)

export function FavoritesProvider({children}: FavoritesProviderProps) {
    const [movies, setMovies, moviesIsLoading] = usePersistedState<IMovie[]>(
        FAVORITE_MOVIES_KEY,
        []
    )

    const addMovie = useCallback((movie: IMovie) => {
        setMovies(previousMovies => {
            const isFavorite = previousMovies.some(({id}) => id === movie.id)

            if (isFavorite) {
                return previousMovies
            } else {
                return uniqueArray(previousMovies.concat(movie))
            }
        }
        )
    }, [])
    
    const removeMovie = useCallback((movieId: IMovie['id']) => {
        setMovies(previousMovies => 
            previousMovies.filter(movie => movie.id !== movieId)
        )
    }, [])

    const toogleMovie = useCallback((movie: IMovie) => {
        setMovies((previousMovies) => {
            const isFavorite = previousMovies.some(({id}) => id === movie.id)

            if (isFavorite) {
                return previousMovies.filter(({id}) => id !== movie.id)
            } else {
                return uniqueArray(previousMovies.concat(movie))
            }
        })
    }, [])

    const clearMovies = useCallback(() => {
        setMovies([])
    }, [])

    return (
        <FavoritesContext.Provider
            value={{
                movies: {
                    data: movies,
                    loading: moviesIsLoading,
                    add: addMovie,
                    remove: removeMovie,
                    clear: clearMovies,
                    toogle: toogleMovie
                },
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
