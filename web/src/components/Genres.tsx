import Link from 'next/link'
import {Genre} from '../@types'

import {Circle} from './helper/Circle'

interface GenresProps {
    data?: Genre[]
}

export function Genres({data}: GenresProps) {
    if (data?.length === 0) return null

    return (
        <>
            <Circle />
            <div className="flex gap-2">
                {data?.map((genre) => (
                    <Link
                        className="hover:text-gray-300 transition-all"
                        key={genre.id}
                        href="/"
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
            <Circle />
        </>
    )
}
