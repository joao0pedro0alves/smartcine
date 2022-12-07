import Link from 'next/link'
import moment from 'moment'
import * as Dialog from '@radix-ui/react-dialog'
import {Info, PlayCircle, Plus} from 'phosphor-react'

import {IMovie} from '../@types'

import {Image} from './helper/Image'
import {getMovieBanner} from '../utils/getMovieBanner'

interface MovieDetailProps {
    movie: IMovie
    show: boolean
    onClose: () => void
    pathname: string
}

export function MovieDetail({movie, show, pathname, onClose}: MovieDetailProps) {
    return (
        <Dialog.Root open={show}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 inset-0 fixed z-20" />
                <Dialog.Content className="flex flex-col fixed bg-gray-700 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[800px] min-h-[420px] shadow-black/25 z-30">

                    <div className='flex flex-1 gap-4'>
                        <div className='fixed -top-10'>
                            <Image
                                width={200}
                                height={300}
                                alt={`Poster do filme ${movie.title}`}
                                src={getMovieBanner(movie, true)}
                                className="shadow-xl min-w-[200px] min-h-[300px] hover:cursor-pointer scale-100"
                            />

                            <button className='w-full mt-4 max-w-[200px] flex gap-2 items-center justify-center h-12 p-2 rounded-md bg-zinc-500 hover:bg-zinc-600'>
                                <PlayCircle weight='bold' size={25} className='text-zinc-100'/>
                                <span className='block'>Assista ao trailer</span>
                            </button>

                            <div className='mt-4 flex gap-4 justify-between max-w-[200px]'>
                                <Link onClick={onClose} href={{pathname, query: {movieId: movie.id}}} className='flex flex-col items-center hover:opacity-80 transition-opacity'>
                                    <Info size={25} className='text-zinc-100'/>
                                    <span className='block mt-1 text-sm'>Saiba mais</span>
                                </Link>

                                <button className='flex flex-col items-center hover:opacity-80 transition-opacity'>
                                    <Plus size={25} className='text-zinc-100'/>
                                    <span className='block mt-1 text-sm'>Minha lista</span>
                                </button>
                            </div>

                        </div>

                        <div className='ml-[232px]'>

                            <Dialog.Title className="text-3xl font-black">
                                {movie.title}
                            </Dialog.Title>

                            <span className="block mt-2 text-zinc-400">
                                {movie?.release_date ? moment(movie?.release_date).format('DD/MM/YYYY') : 'Data não informada'}
                                {' | '}
                                {movie?.vote_count} Avaliações
                            </span>

                            <p className='mt-2 text-md text-zinc-300 max-h-[300px] overflow-auto apply-thin-scrollbar'>
                                {movie.overview}
                            </p>
                        </div>
                    </div>

                    <footer className="mt-4 flex justify-end gap-4">
                        <button
                            onClick={onClose}
                            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                        >
                            Fechar
                        </button>
                    </footer>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
