import Head from 'next/head'
import {useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/router'
import moment from 'moment'

import {IMovie} from '../@types'
import {api} from '../services/api'
import {apiEndPoints} from '../constants/apiEndPoints'

import {Container} from '../components/Container'
import {MovieHeader} from '../components/MovieHeader'
import {MoviePoster} from '../components/MoviePoster'
import Movies from '../components/Movies'

export default function Detail() {
    const [movie, setMovie] = useState<IMovie>({} as IMovie)
    const [_, setLoading] = useState(true)

    const router = useRouter()
    const movieId = router.query.movieId as string

    async function fetchMovie() {
        try {
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
        fetchMovie()
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
                    <MoviePoster
                        width={266}
                        height={400}
                        averageSize={60}
                        movie={movie}
                        className="shadow-xl min-w-[266px] min-h-[400px]"
                    />

                    <div className="py-8">
                        <h1 className="text-white font-serif text-4xl font-black">
                            {movie?.title}
                        </h1>

                        <p className="text-zinc-200 text-lg py-4">
                            {movie?.overview}
                        </p>

                        <strong className="text-zinc-400">
                            {moment(movie?.release_date).format(
                                'DD [de] MMMM [de] YYYY'
                            )}
                            {' | '}
                            {movie?.vote_count} Avaliações
                        </strong>
                    </div>
                </div>
            </MovieHeader>
        ),
        [movie]
    )

    return (
        <Container Header={displayHeader}>
            <Head>
                <title>{movie?.title}</title>
            </Head>

            {movieId && (
                <div className="py-4">
                    <Movies
                        title="Filmes similares"
                        url={apiEndPoints.movie.similar(movieId)}
                        onPressMovie={console.log}
                    />
                    <Movies
                        title="Recomendados para você"
                        url={apiEndPoints.movie.recommendations(movieId)}
                        onPressMovie={console.log}
                    />
                </div>
            )}
        </Container>
    )
}
