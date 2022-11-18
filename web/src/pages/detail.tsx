import Head from 'next/head'
import {useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/router'
import moment from 'moment'

import {IMovie} from '../@types'
import {api} from '../services/api'
import {apiEndPoints} from '../constants/apiEndPoints'
import {getMovieBanner} from '../utils/getMovieBanner'

import {Image} from '../components/helper/Image'
import {Container} from '../components/Container'
import {MovieHeader} from '../components/MovieHeader'

export default function Detail() {
    const [movie, setMovie] = useState<IMovie>({} as IMovie)

    const router = useRouter()
    const { movieId } = router.query

    async function fetchMovie() {
        try {
            if (typeof movieId === 'string') {

                const response = await api.get(apiEndPoints.movie.show(movieId))
                setMovie(response.data)
            }
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [movieId])

    const displayHeader = useCallback(
        () => (
            <MovieHeader movie={movie} showBackgroundVideo={false}>
                <div className="w-full py-0 flex flex-col items-center gap-16 md:flex-row sm:py-4">
                    <Image
                        width={400}
                        height={600}
                        alt={`Poster do filme ${movie.title}`}
                        src={getMovieBanner(movie, true)}
                        className="shadow-xl min-h-[400px] min-w-[400px]"
                    />

                    <div className="py-8">
                        <h1 className="text-white font-serif text-4xl font-black">
                            {movie?.title}
                        </h1>

                        <p className="text-zinc-200 text-lg py-4">
                            {movie?.overview}
                        </p>

                        <strong className="text-zinc-400">
                            {moment(movie?.release_date).format('DD [de] MMMM [de] YYYY')}
                            {' | '}
                            {parseFloat(String(movie.vote_average)).toFixed(1)}
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
            
        </Container>
    )
}
