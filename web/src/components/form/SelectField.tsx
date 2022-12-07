import { forwardRef, InputHTMLAttributes } from 'react'
import { IconProps } from 'phosphor-react'
import { FieldErrorsImpl } from 'react-hook-form'
import clsx from 'clsx'

interface Option {
    value: string
    label: string
}

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
    icon?: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >
    errors?: Partial<
        FieldErrorsImpl<{
            [x: string]: any
        }>
    >

    placeholder?: string
    options: Option[]
}

export const SelectField = forwardRef<HTMLSelectElement, InputProps>(
    (
        { type, icon: Icon, errors, className, placeholder, options, ...props },
        ref
    ) => {
        const inputError = errors && props.name ? errors[props.name] : {}

        return (
            <div className="relative text-gray-600 focus-within:text-yellow-700">
                {Icon && (
                    <div className="absolute left-3 top-4">
                        <Icon
                            weight="bold"
                            className="text-2xl transition-colors"
                        />
                    </div>
                )}

                <select
                    ref={ref}
                    className={clsx(
                        'text-sm text-gray-100 w-full px-12 py-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-700 transition-colors',
                        className
                    )}
                    {...props}
                >
                    {placeholder && <option value='' selected disabled>{placeholder}</option>}

                    {options.map(({ value, label }, index) => (
                        <option value={value} key={index}>
                            {label}
                        </option>
                    ))}
                </select>

                {inputError?.message && (
                    <span className="block mt-2 text-red-500 text-sm">
                        {inputError.message.toString()}
                    </span>
                )}
            </div>
        )
    }
)
