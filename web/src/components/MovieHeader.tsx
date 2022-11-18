import {useState, useEffect} from 'react'

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
}

export function MovieHeader({movie, isPoster, children, showBackgroundVideo = true}: MovieHeaderProps) {
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

    return (
        <div
            className="bg-no-repeat bg-cover min-h-screen relative"
            style={{
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

                <div className="container mx-auto z-20 relative min-h-screen flex items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
