interface ListSkeletonProps {
    amount: number
    height: number
    width: number
}

export function ListSkeleton({amount, height, width}: ListSkeletonProps) {
    return (
        <div role="status" className="w-full animate-pulse flex gap-2">
            {[...Array(amount)].map((_, index) => (
                <div
                    key={index}
                    className={`rounded bg-gray-700`}
                    style={{
                        height,
                        width
                    }}
                />
            ))}
        </div>
    )
}
