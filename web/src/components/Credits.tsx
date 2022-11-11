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
}

export function Credits({movieId}: CreditsProps) {
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

    const director = credits.crew?.find(producer => producer.job === 'Director')
    const writer = credits.crew?.find(producer => producer.job === 'Writer')

    return (
        <section>

            <div className='mt-4'>
                <div className='flex justify-between'>
                    <span className='text-white text-lg font-bold mb-2 block'>Elenco</span>
                </div>

                {loading ? (
                    <ListSkeleton
                        amount={4}
                        height={150}
                        width={112}
                    />
                ) : (
                    <div className='flex gap-2'>
                        {first(credits.cast, 4).map((actor) => (
                            <div className='bg-gray-800 rounded overflow-hidden w-[112px]'>
                                <Image
                                    key={actor.id}
                                    alt={`Foto ator ${actor.original_name}`}
                                    src={getMovieCastPicture(actor)}
                                    height={150}
                                    width={112}
                                />

                                <div className='p-2'>
                                    <span className='text-white font-bold block whitespace-nowrap overflow-hidden overflow-ellipsis'>
                                        {actor.character}
                                    </span>
                                    <span className='text-zinc-300 block text-sm whitespace-nowrap overflow-hidden overflow-ellipsis'>
                                        {actor.original_name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='flex gap-8 mt-4'>
                <div>
                    <span className='text-white font-bold block'>Direção</span>
                    <span className='text-zinc-300 block mb-1'>{director?.name}</span>
                </div>

                <div>
                    <span className='text-white font-bold block'>Roteiro por:</span>
                    <span className='text-zinc-300 block mb-1'>{writer?.name}</span>
                </div>
            </div>

        </section>
    )
}
