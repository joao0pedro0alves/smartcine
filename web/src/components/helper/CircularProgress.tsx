import {
    CircularProgress as MuiCircularProgress,
    CircularProgressProps,
    circularProgressClasses,
} from '@mui/material'

interface Props extends CircularProgressProps {
    labelValue?: string
}

export function CircularProgress({className, labelValue, ...props}: Props) {
    return (
        <div className="relative">
            <MuiCircularProgress
                variant="determinate"
                className="text-gray-600"
                thickness={5}
                {...props}
                value={100}
            />

            <MuiCircularProgress
                variant="determinate"
                disableShrink
                thickness={5}
                sx={{
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                className={className}
                {...props}
            />

            <div className="inset-0 absolute flex items-center justify-center">
                <span className="text-gray-100 font-bold text-md">
                    {labelValue}%
                </span>
            </div>
        </div>
    )
}