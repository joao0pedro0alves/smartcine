import Link from 'next/link'
import {memo, useEffect, useState} from 'react'
import {CaretRight} from 'phosphor-react'

import {IMovie} from '../@types'
import {api} from '../services/api'
import {getMovieBanner} from '../utils/getMovieBanner'

import {Slider} from './helper/Slider'
import {Image} from './helper/Image'
import {ListSkeleton} from './helper/ListSkeleton'
export interface MoviesProps {
    title?: string
    url?: string
    data?: IMovie[]
    showSeeAll?: boolean

    onPressMovie?: (movie: IMovie) => void
    onLoadMovies?: (movies: IMovie[]) => void
}

export function Movies({title, url, showSeeAll = true, onPressMovie}: MoviesProps) {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(Boolean(url))

    async function fetchMovies() {
        if (url) {
            try {
                const response = await api.get(url)
                setMovies(response.data.results)
            } catch (error) {
                console.log(error)
                throw error;
                
            } finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [url])

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-2">
                <strong className="text-white text-2xl">{title}</strong>

                {showSeeAll && (
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-zinc-300 hover:underline"
                    >
                        <span className="text-sm">Ver mais</span>

                        <CaretRight size={14} />
                    </Link>
                )}
            </div>

            <div>
                {loading ? (
                    <ListSkeleton 
                        amount={8}
                        height={268}
                        width={200}
                    />
                ) : (
                    <Slider
                        data={movies}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <button 
                                className='hover:opacity-80 transition-opacity' 
                                onClick={onPressMovie ? () => onPressMovie(item) : undefined}
                            >
                                <Image
                                    className='rounded'
                                    alt={`Poster filme ${item.title}`}
                                    src={getMovieBanner(item, true)}
                                    height={268}
                                    width={200}
                                />
                            </button>
                        )}
                    />
                )}
            </div>
        </div>
    )
}

export default memo(Movies)
