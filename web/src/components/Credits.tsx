import {useState, useEffect} from 'react'

import {ICredits} from '../@types'
import {api} from '../services/api'
import {apiEndPoints} from '../constants/apiEndPoints'
import {getMovieCastPicture} from '../utils/getMovieBanner'
import {first} from '../utils/first'

import {ListSkeleton} from './helper/ListSkeleton'
import {Image} from './helper/Image'

interface CreditsProps {
    movieId: string
    take?: 'all' | number
}

export function Credits({movieId, take = 4}: CreditsProps) {
    const [credits, setCredits] = useState<ICredits>({} as ICredits)
    const [loading, setIsLoading] = useState(true)

    async function fetchCredits() {
        try {
            const response = await api.get(apiEndPoints.movie.credits(movieId))
            setCredits(response.data)
        } catch (error) {
            console.log(error)
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchCredits()
    }, [movieId])

    const director = credits.crew?.find(
        (producer) => producer.job === 'Director'
    )
    const writer = credits.crew?.find((producer) => producer.job === 'Writer')

    return (
        <section>
            <div className="mt-4">
                <div className="flex justify-between">
                    <span className="text-white text-md font-bold mb-2 block">
                        Elenco
                    </span>
                </div>

                {loading ? (
                    <ListSkeleton amount={4} height={150} width={112} />
                ) : (
                    <div className="flex gap-2">
                        {first(credits.cast, take === 'all' ? credits.cast.length : take).map((actor) => (
                            <div
                                key={actor.id}
                                className="bg-blue-500 rounded-lg overflow-hidden group flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100"
                            >
                                <Image
                                    key={actor.id}
                                    alt={`Foto ator ${actor.original_name}`}
                                    src={getMovieCastPicture(actor)}
                                    className='w-full max-w-[100px]'
                                />

                                <div className="w-0 group-hover:p-4 group-hover:w-[200px] transition-all delay-75 duration-500">
                                    <span className="text-white font-bold block whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        {actor.character}
                                    </span>
                                    <span className="text-zinc-300 block text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        {actor.original_name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex gap-8 mt-6">
                <div>
                    <span className="text-white font-bold block">Direção</span>
                    <span className="text-zinc-300 block mb-1">
                        {director?.name}
                    </span>
                </div>

                <div>
                    <span className="text-white font-bold block">
                        Roteiro por:
                    </span>
                    <span className="text-zinc-300 block mb-1">
                        {writer?.name}
                    </span>
                </div>
            </div>
        </section>
    )
}
