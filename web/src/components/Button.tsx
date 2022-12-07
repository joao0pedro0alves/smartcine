import clsx from 'clsx'
import {ButtonHTMLAttributes, ForwardRefExoticComponent} from 'react'
import {Oval} from 'react-loader-spinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    variant?: 'primary' | 'secondary'
    as?: ForwardRefExoticComponent<any>
}

export const buttonClasses: ButtonProps['className'] =
    'text-xs relative px-6 py-4 rounded font-bold md:h-12 md:text-sm uppercase'

export function Button({
    className,
    variant = 'primary',
    isLoading = false,
    as: AsComponent,
    ...props
}: ButtonProps) {
    const isSecondary = variant === 'secondary'

    const Component = ({...props}) =>
        AsComponent ? <AsComponent {...props} /> : <button {...props} />

    return (
        <Component
            {...props}
            className={clsx(
                buttonClasses,
                isSecondary
                    ? 'text-white border border-gray-700 bg-gray-900 hover:bg-gray-800'
                    : 'text-gray-900 bg-blue-500 hover:bg-blue-700',
                isLoading ? 'opacity-80 pointer-events-none' : '',
                className
            )}
        >
            {props.children}

            <Oval
                height={24}
                width={24}
                wrapperStyle={{}}
                wrapperClass="absolute inset-0 flex items-center justify-center"
                visible={isLoading}
                ariaLabel="oval-loading"
                strokeWidth={3}
                strokeWidthSecondary={3}
                color="#121214"
                secondaryColor="#202024"
            />
        </Component>
    )
}
