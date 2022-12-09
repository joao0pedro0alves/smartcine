import clsx from 'clsx'
import {ImageProps} from 'next/image'
import {PlayCircle} from 'phosphor-react'

import {IMovie} from '../@types'
import {getMovieBanner} from '../utils/getMovieBanner'

import {Image} from './helper/Image'
import {CircularProgress} from './helper/CircularProgress'
import {buttonClasses} from './Button'

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
        <div className="group relative">
            <Image
                alt={`Poster do filme ${movie.title}`}
                src={getMovieBanner(movie, true)}
                isOptimized
                {...props}
            />

            <div className="absolute -right-6 -top-6">
                <div className="relative">
                    <CircularProgress
                        className="text-blue-500"
                        variant="determinate"
                        size={averageSize}
                        value={value}
                        labelValue={Math.round(value).toString()}
                    />
                </div>
            </div>

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
    )
}
