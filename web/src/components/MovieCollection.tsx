import Link from 'next/link'
import {MovieCollection} from '../@types'
import {getMovieBanner} from '../utils/getMovieBanner'

import {Image} from './helper/Image'

interface MovieCollectionProps {
    collection: MovieCollection
}

export function MovieCollection({collection}: MovieCollectionProps) {
    return (
        <Link
            href='/collection'
            className="flex group relative items-end my-6 px-4 py-2 rounded bg-gray-900 bg-no-repeat bg-cover shadow h-[200px] w-[200px] overflow-hidden hover:w-[400px] hover:shadow-md transition-all duration-500"
            style={{
                backgroundImage: `url('${getMovieBanner(collection, false)}')`,
            }}
        >
            <Image
                alt=''
                className='shadow-lg rounded'
                src={getMovieBanner(collection, true)}
                width={100}
                height={200}
                quality={75}
            />

            <div className='absolute bottom-0 left-0 right-0 w-full bg-black/60 text-right p-4'>
                <span
                    className='text-white font-serif font-bold text-2xl'
                >
                    {collection.name}
                </span>
            </div>
        </Link>
    )
}
