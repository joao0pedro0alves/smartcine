import moment from 'moment'

import {IMovie} from '../@types'
import {api} from '../services/api'
import {apiEndPoints} from '../constants/apiEndPoints'
import {getMovieBanner} from '../utils/getMovieBanner'
import {convertMinutesToHourString} from '../utils/convertMinutesToHourString'
import {sample} from '../utils/sample'

import {Image} from '../components/helper/Image'
import {Container} from '../components/Container'
import {MovieHeader} from '../components/MovieHeader'
import {VoteAverage} from '../components/VoteAverage'
import {Credits} from '../components/Credits'
import Movies from '../components/Movies'

interface HomeProps {
    bannerMovie: IMovie
}

export default function Home({bannerMovie}: HomeProps) {
    
    return (
        <Container
            Header={() => (
                <MovieHeader movie={bannerMovie}>
                    <div className="w-full flex gap-8">
                        <Image
                            width={400}
                            height={600}
                            alt={`Poster do filme ${bannerMovie.title}`}
                            src={getMovieBanner(bannerMovie, true)}
                            className="shadow-xl min-h-[400px] min-w-[400px]"
                        />

                        <div className="py-8">
                            <h1 className="text-white font-serif text-3xl font-black">
                                {bannerMovie?.title}
                            </h1>

                            <p className="text-zinc-200 text-lg py-4">
                                {bannerMovie?.overview}
                            </p>

                            <strong className="text-zinc-100">
                                {moment(bannerMovie?.release_date).format('DD [de] MMMM [de] YYYY')}
                                {' | '}
                                {convertMinutesToHourString(bannerMovie?.runtime)}
                                {' | '}
                                {bannerMovie?.vote_count} Avaliações
                            </strong>

                            <div className="mt-4">
                                <VoteAverage
                                    value={bannerMovie?.vote_average}
                                />
                            </div>

                            <div className="mt-4">
                                <Credits />
                            </div>
                        </div>
                    </div>
                </MovieHeader>
            )}
        >
            <div className='py-4'>
                <Movies
                    title="Em alta"
                    url={apiEndPoints.movie.popular}
                    onPressMovie={() => {}}
                />
                <Movies
                    title="Agora nos cinemas"
                    url={apiEndPoints.movie.upcoming}
                    onPressMovie={() => {}}
                />
                <Movies
                    title="Lançamentos"
                    url={apiEndPoints.movie.nowPlaying}
                    onPressMovie={() => {}}
                />
                <Movies
                    title="Aclamados pela crítica"
                    url={apiEndPoints.movie.topRated}
                    onPressMovie={() => {}}
                />
            </div>
        </Container>
    )
}

export const getStaticProps = async () => {
    const movieResponse = await api.get(apiEndPoints.movie.popular)
    const moviesWithOverview = movieResponse.data.results.filter((movie: IMovie) => movie.overview.trim())

    return {
        props: {
            bannerMovie: sample(moviesWithOverview)
        }
    }
}