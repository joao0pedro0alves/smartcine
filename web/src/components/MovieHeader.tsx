import clsx from 'clsx'
import {useState, useEffect, HTMLAttributes} from 'react'

import {IMovie, IVideo} from '../@types'
import {apiEndPoints} from '../constants/apiEndPoints'
import api from '../services/api'
import {getMovieBanner} from '../utils/getMovieBanner'

interface MovieHeaderProps {
    children?: React.ReactNode

    movie: IMovie | null
    isPoster?: boolean
    showBackButton?: boolean
    showFavoriteButton?: boolean
    showBackgroundVideo?: boolean

    className?: HTMLAttributes<HTMLDivElement>['className']
    screenOccupation?: number
}

export function MovieHeader({
    movie,
    isPoster,
    children,
    showBackgroundVideo = false,
    className,
    screenOccupation,
}: MovieHeaderProps) {
    const [videoKey, setVideoKey] = useState('')

    async function fetchMovieVideos() {
        try {
            if (movie) {
                const response = await api.get(
                    apiEndPoints.movie.videos(movie.id)
                )
                const videos: IVideo[] = response.data.results
                const officialVideo = videos.find((v) => v.official)

                if (officialVideo) {
                    setVideoKey(officialVideo.key)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (showBackgroundVideo) {
            fetchMovieVideos()
        }
    }, [showBackgroundVideo, movie])

    const minHeight = screenOccupation ? `${screenOccupation}vh` : '100vh'

    return (
        <div
            className={clsx('bg-no-repeat bg-cover bg-fixed relative', className)}
            style={{
                minHeight,
                backgroundImage: movie
                    ? `url('${getMovieBanner(movie, isPoster)}')`
                    : '',
            }}
        >
            <div className="content-linear-shadow">
                {showBackgroundVideo && videoKey && (
                    <iframe
                        onEnded={() => setVideoKey('')}
                        src={`https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&mute=1&playsinline=0&loop=1`}
                        title="YouTube movie trailer"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none h-screen min-w-full z-0"
                    />
                )}

                <div
                    className={clsx(
                        'container mx-auto z-20 relative flex items-center'
                    )}
                    style={{
                        minHeight,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
