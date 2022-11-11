import Link from 'next/link'
import {memo, useEffect, useState} from 'react'
import {CaretRight} from 'phosphor-react'

import {IMovie} from '../@types'
import {api} from '../services/api'

import {Slider} from './helper/Slider'
import {Image} from './helper/Image'
import {getMovieBanner} from '../utils/getMovieBanner'

const AMOUNT_SKELETONS = 8

export interface MoviesProps {
    title?: string
    url?: string
    data?: IMovie[]
    showSeeAll?: boolean

    onPressMovie?: (movie: IMovie) => void
    onLoadMovies?: (movies: IMovie[]) => void
}

export function Movies({title, url, showSeeAll = true}: MoviesProps) {
    const [data, setData] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(Boolean(url))

    async function fetchMovies() {
        if (url) {
            try {
                const response = await api.get(url)
                setData(response.data.results)
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

    const Skeleton = () => (
        <div role="status" className="w-full animate-pulse flex gap-2">
            {[...Array(AMOUNT_SKELETONS)].map((_, index) => (
                <div
                    key={index}
                    className="h-[268px] w-[200px] rounded bg-gray-700"
                />
            ))}
        </div>
    )

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
                    <Skeleton />
                ) : (
                    <Slider
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <Link className='hover:opacity-80 transition-opacity' href={`/detail?movie=${item.id}`}>
                                <Image
                                    className='rounded'
                                    alt={`Poster filme ${item.title}`}
                                    src={getMovieBanner(item, true)}
                                    height={268}
                                    width={200}
                                />
                            </Link>
                        )}
                    />
                )}
            </div>
        </div>
    )
}

export default memo(Movies)
