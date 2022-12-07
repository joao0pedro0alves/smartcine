import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/router'
import {PlayCircle} from 'phosphor-react'
import clsx from 'clsx'
import moment from 'moment'

import {IMovie} from '../../@types'
import {api} from '../../services/api'
import {apiEndPoints} from '../../constants/apiEndPoints'
import {convertMinutesToHourString} from '../../utils/convertMinutesToHourString'

import {buttonClasses} from '../../components/Button'
import {Circle} from '../../components/helper/Circle'
import {LoaderContainer} from '../../components/helper/LoaderContaner'
import {Container} from '../../components/Container'
import {MovieHeader} from '../../components/MovieHeader'
import {MoviePoster} from '../../components/MoviePoster'
import {MovieDetail} from '../../components/MovieDetail'
import {MovieCollection} from '../../components/MovieCollection'
import Movies from '../../components/Movies'

export default function Detail() {
    const [selectedMovie, setSelectedMovie] = useState<IMovie>({} as IMovie)

    const [movie, setMovie] = useState<IMovie>({} as IMovie)
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    const movieId = router.query.movieId as string

    const releaseYear = movie?.release_date ? moment(movie?.release_date).format('YYYY') : ''

    async function fetchMovie() {
        try {
            setLoading(true)

            if (typeof movieId === 'string') {
                const response = await api.get(apiEndPoints.movie.show(movieId))
                setMovie(response.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (movieId) {
            fetchMovie()
        }
    }, [movieId])

    const displayHeader = useCallback(
        () => (
            <MovieHeader
                movie={movie}
                showBackgroundVideo={false}
                screenOccupation={75}
                className="border-b border-gray-600"
            >
                <div className="w-full py-0 flex flex-col items-center gap-16 md:flex-row sm:py-4">
                    <div className="group relative">
                        <MoviePoster
                            width={266}
                            height={400}
                            averageSize={60}
                            movie={movie}
                            className="shadow-xl min-w-[266px] min-h-[400px]"
                        />

                        <div className="absolute bg-black/40 -inset-0 z-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                            <button
                                className={clsx(
                                    buttonClasses,
                                    'flex gap-2 items-center justify-center w-[220px] bg-white/80 z-2'
                                )}
                            >
                                <PlayCircle size={18} weight="bold" />
                                <span>Reproduzir trailer</span>
                            </button>
                        </div>
                    </div>

                    <div className="py-8">
                        <h1 className="text-white font-serif text-4xl font-black">
                            {movie?.title} ({releaseYear})
                        </h1>

                        <div className="flex items-center gap-2 my-2 text-gray-200">
                            <span>
                                {movie?.release_date ? moment(movie?.release_date).format('DD/MM/YYYY') : 'Data não informada'}
                            </span>
                            <Circle />
                            <div className="flex gap-2">
                                {movie?.genres?.map((genre) => (
                                    <Link
                                        className="hover:text-gray-300 transition-all"
                                        key={genre.id}
                                        href="/"
                                    >
                                        {genre.name}
                                    </Link>
                                ))}
                            </div>
                            <Circle />
                            <span>
                                {convertMinutesToHourString(movie.runtime)}
                            </span>
                        </div>

                        <span className="text-gray-300 italic text-md block mt-4">
                            {movie.tagline}
                        </span>

                        <p className="text-gray-200 text-lg py-4">
                            {movie?.overview}
                        </p>

                        {movie.belongs_to_collection && (
                            <MovieCollection
                                collection={movie.belongs_to_collection}
                            />
                        )}
                    </div>
                </div>
            </MovieHeader>
        ),
        [movie]
    )

    return (
        <Container Header={displayHeader}>
            <Head>
                <title>{movie?.title} ({releaseYear}) - Smartcine</title>
            </Head>

            <LoaderContainer isLoading={loading}>
                {movieId && (
                    <div className="py-4">
                        <Movies
                            title="Filmes similares"
                            url={apiEndPoints.movie.similar(movieId)}
                            onPressMovie={setSelectedMovie}
                        />
                        <Movies
                            title="Recomendados para você"
                            url={apiEndPoints.movie.recommendations(movieId)}
                            onPressMovie={setSelectedMovie}
                        />
                    </div>
                )}
            </LoaderContainer>

            <MovieDetail
                movie={selectedMovie}
                show={Boolean(selectedMovie.id)}
                onClose={() => setSelectedMovie({} as IMovie)}
                pathname="detail"
            />
        </Container>
    )
}
