import {useState, useCallback} from 'react'
import moment from 'moment'

import {IMovie} from '../@types'
import {api} from '../services/api'
import {apiEndPoints} from '../constants/apiEndPoints'
import {sample} from '../utils/sample'

import {Container} from '../components/Container'
import {Credits} from '../components/Credits'
import {MovieHeader} from '../components/MovieHeader'
import {MovieDetail} from '../components/MovieDetail'
import {MoviePoster} from '../components/MoviePoster'
import Movies from '../components/Movies'

interface HomeProps {
    bannerMovie: IMovie
}

export default function Home({bannerMovie}: HomeProps) {
    const [selectedMovie, setSelectedMovie] = useState<IMovie>({} as IMovie)

    const displayHeader = useCallback(
        () => (
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
                            {bannerMovie?.title}
                        </h1>

                        <p className="text-zinc-200 text-lg py-4">
                            {bannerMovie?.overview}
                        </p>

                        <strong className="text-zinc-400">
                            {moment(bannerMovie?.release_date).format(
                                'DD [de] MMMM [de] YYYY'
                            )}
                            {' | '}
                            {bannerMovie?.vote_count} Avaliações
                        </strong>

                        <div className="mt-8">
                            <Credits movieId={bannerMovie.id} />
                        </div>
                    </div>
                </div>
            </MovieHeader>
        ),
        []
    )

    return (
        <Container Header={displayHeader}>
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
                    // url={apiEndPoints.movie.topRated}
                    data={[]}
                    onPressMovie={setSelectedMovie}
                />
            </div>

            <MovieDetail
                movie={selectedMovie}
                show={Boolean(selectedMovie.id)}
                onClose={() => setSelectedMovie({} as IMovie)}
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
