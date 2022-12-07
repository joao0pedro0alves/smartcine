import CircularProgress from '@mui/material/CircularProgress'

interface LoaderContainerProps {
    isLoading: boolean
    children: React.ReactNode
}

export function LoaderContainer({isLoading, children}: LoaderContainerProps) {
    return (
        <div className="min-h-[40vh] relative">
            {!isLoading ? (
                children
            ) : (
                <div className='absolute inset-0 flex items-center justify-center'>
                    <CircularProgress
                        className='text-blue-500'
                        size={60}
                    />
                </div>
            )}
        </div>
    )
}
