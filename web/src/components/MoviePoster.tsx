import {ImageProps} from 'next/image'

import {IMovie} from '../@types'
import {getMovieBanner} from '../utils/getMovieBanner'

import {Image} from './helper/Image'
import {CircularProgress} from './helper/CircularProgress'

interface MoviePosterProps {
    movie: IMovie
    width: number
    height: number
    averageSize?: number
    className?: ImageProps['className']
}

export function MoviePoster({movie, averageSize, ...props}: MoviePosterProps) {
    const value = movie.vote_average * 10 || 0

    return (
        <div className="relative">
            <Image
                alt={`Poster do filme ${movie.title}`}
                src={getMovieBanner(movie, true)}
                {...props}
            />

            <div className="absolute -right-6 -top-6">
                <div className="relative">
                    <CircularProgress
                        className="text-blue-500"
                        variant="determinate"
                        size={averageSize}
                        value={value}
                        labelValue={Math.floor(value).toString()}
                    />
                </div>
            </div>
        </div>
    )
}
