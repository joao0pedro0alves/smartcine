import {useState, useEffect} from 'react'
import Image from 'next/image'
import moment from 'moment'

import {THEMOVIEDB_CONFIG} from '../config/themoviedb'
import {IMovie} from '../@types'
import {api} from '../services/api'
import {getMovieBanner} from '../utils/getMovieBanner'
import {convertMinutesToHourString} from '../utils/convertMinutesToHourString'

import {Container} from '../components/Container'
import {MovieHeader} from '../components/MovieHeader'
import {VoteAverage} from '../components/VoteAverage'

export default function Home() {
    const [data, setData] = useState<IMovie[]>([])
    const [_, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovies() {
            try {
                const response = await api.get('movie/popular', {
                    params: THEMOVIEDB_CONFIG,
                })

                const movies = response.data.results
                setData(movies)

            } catch (error) {
                console.log(error)

            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [])

    const movie = data[3]

    return (
        <Container 
            Header={() => (
                    <MovieHeader movie={movie}>
                        <div className='w-full flex gap-8'>
                            {movie && (
                                <Image 
                                    width={400}
                                    height={600}
                                    alt={`Poster do filme ${movie.title}`}
                                    src={getMovieBanner(movie, true)}
                                    className='shadow-xl'
                                />
                            )}

                            <div className='py-8'>
                                <h1 className='text-white font-serif text-3xl font-black'>
                                    {movie?.title}
                                </h1>

                                <p className='text-zinc-200 text-lg py-4'>
                                    {movie.overview}
                                </p>

                                <strong className='text-zinc-100'>
                                    {moment(movie.release_date).format('DD [de] MMMM [de] YYYY')}{' | '}
                                    {convertMinutesToHourString(movie.runtime)}{' | '}
                                    {movie.vote_count} Avaliações
                                </strong>

                                <div className='mt-4'>
                                    <VoteAverage 
                                        value={movie.vote_average}
                                    />
                                </div>
                            </div>
                        </div>
                    </MovieHeader>
                )}
        >
            {/* <Movies
                title="Em alta"
                url="movie/popular"
                onPressMovie={setSelectedMovie}
                onLoadMovies={(movies) => setBannerMovie(sample(movies))}
            />
            <Movies
                title="Agora nos cinemas"
                url="movie/upcoming"
                onPressMovie={setSelectedMovie}
            />
            <Movies
                title="Lançamentos"
                url="movie/now_playing"
                onPressMovie={setSelectedMovie}
            />
            <Movies
                title="Aclamados pela crítica"
                url="movie/top_rated"
                onPressMovie={setSelectedMovie}
            /> */}
        </Container>
    )
}
