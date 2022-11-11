interface VoteAverageProps {
    value: number
}

export function VoteAverage({value}: VoteAverageProps) {
    return (
        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-green-600">
            <span className="text-white font-bold text-2xl">
                {parseFloat(String(value)).toFixed(1)}
            </span>
        </div>
    )
}
