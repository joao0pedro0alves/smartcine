import Head from 'next/head'
import {useState, useCallback} from 'react'
import moment from 'moment'

import {IMovie} from '../@types'
import {api} from '../services/api'
import {apiEndPoints} from '../constants/apiEndPoints'
import {sample} from '../utils/sample'

import {Container} from '../components/Container'
import {Credits} from '../components/Credits'
import {Circle} from '../components/helper/Circle'
import {MovieHeader} from '../components/MovieHeader'
import {MovieDetail} from '../components/MovieDetail'
import {MoviePoster} from '../components/MoviePoster'
import Movies from '../components/Movies'

interface HomeProps {
    bannerMovie: IMovie
}

export default function Home({bannerMovie}: HomeProps) {
    const [selectedMovie, setSelectedMovie] = useState<IMovie>({} as IMovie)

    const displayHeader = useCallback(() => {
        const releaseYear = bannerMovie?.release_date
            ? moment(bannerMovie?.release_date).format('YYYY')
            : 'Ano não informado'

        const releaseDate = bannerMovie?.release_date
            ? moment(bannerMovie?.release_date).format('DD/MM/YYYY')
            : 'Data não informada'

        return (
            <MovieHeader movie={bannerMovie}>
                <div className="w-full py-0 flex flex-col items-center gap-16 md:flex-row sm:py-4">
                    <MoviePoster
                        width={400}
                        height={600}
                        averageSize={60}
                        movie={bannerMovie}
                        className="shadow-xl min-w-[400px] min-h-[600px]"
                    />

                    <div className="py-8">
                        <h1 className="text-white font-serif text-4xl font-black">
                            {bannerMovie
                                ? `${bannerMovie?.title} (${releaseYear})`
                                : '...'}
                        </h1>

                        <div className="flex items-center gap-2 my-2 text-gray-200">
                            <span>{releaseDate}</span>
                            <Circle />
                            <span>
                                {bannerMovie.vote_count} Avaliações
                            </span>
                        </div>

                        <p className="text-gray-200 text-md py-4">
                            {bannerMovie?.overview}
                        </p>

                        <Credits movieId={bannerMovie.id} />
                    </div>
                </div>
            </MovieHeader>
        )
    }, [])

    return (
        <Container Header={displayHeader}>
            <Head>
                <title>SmartCine</title>
            </Head>

            <div className="py-4">
                <Movies
                    title="Em alta"
                    url={apiEndPoints.movie.popular}
                    onPressMovie={setSelectedMovie}
                />
                <Movies
                    title="Agora nos cinemas"
                    url={apiEndPoints.movie.upcoming}
                    onPressMovie={setSelectedMovie}
                />
                <Movies
                    title="Lançamentos"
                    url={apiEndPoints.movie.nowPlaying}
                    onPressMovie={setSelectedMovie}
                />
                <Movies
                    title="Aclamados pela crítica"
                    url={apiEndPoints.movie.topRated}
                    onPressMovie={setSelectedMovie}
                />
                <Movies
                    title="Minha lista"
                    data={[]}
                    onPressMovie={setSelectedMovie}
                />
            </div>

            <MovieDetail
                movie={selectedMovie}
                show={Boolean(selectedMovie.id)}
                onClose={() => setSelectedMovie({} as IMovie)}
                pathname="/movies/detail"
            />
        </Container>
    )
}

export const getStaticProps = async () => {
    const movieResponse = await api.get(apiEndPoints.movie.popular)
    const moviesWithOverview = movieResponse.data.results.filter(
        (movie: IMovie) => movie.overview.trim()
    )

    return {
        props: {
            bannerMovie: sample(moviesWithOverview),
        },
    }
}
