import clsx from 'clsx'
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
                className="text-gray-600 z-10"
                thickness={5}
                {...props}
                value={100}
            />

            <MuiCircularProgress
                variant="determinate"
                thickness={5}
                sx={{
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                className={clsx(className, 'z-10')}
                {...props}
            />

            <div className="inset-0 absolute flex items-center justify-center z-10">
                <span className="text-gray-100 font-bold text-md">
                    {labelValue}%
                </span>
            </div>
        </div>
    )
}
