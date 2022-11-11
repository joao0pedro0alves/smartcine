import {IMovie} from '../@types'
import {getMovieBanner} from '../utils/getMovieBanner'

interface MovieHeaderProps {
    children?: React.ReactNode

    movie: IMovie | null
    isPoster?: boolean
    showBackButton?: boolean
    showFavoriteButton?: boolean
}

export function MovieHeader({movie, isPoster, children}: MovieHeaderProps) {
       
    return (
        <div
            className="bg-no-repeat bg-cover min-h-screen"
            style={{
                backgroundImage: movie ? `url('${getMovieBanner(movie, isPoster)}')` : '',
            }}
        >
            <div className='content-linear-shadow'>
                <div className="container mx-auto z-10 relative min-h-screen flex items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
