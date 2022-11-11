import {getAverageColor} from '../utils/getAverageColor'

interface VoteAverageProps {
    value: number
}

export function VoteAverage({value}: VoteAverageProps) {
    return (
        <div
            className={
                'w-10 h-10 rounded-md shadow-md flex items-center justify-center' +
                ` ${getAverageColor(value)}`
            }
        >
            <span className="text-white font-bold text-lg">
                {parseFloat(String(value)).toFixed(1)}
            </span>
        </div>
    )
}
