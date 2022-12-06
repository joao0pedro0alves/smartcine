import Link from 'next/link'
import {
    MagnifyingGlass as Search,
    DotsThreeOutlineVertical as MenuIcon,
} from 'phosphor-react'
import {useScrollTrigger} from '@mui/material'
import clsx from 'clsx'

import {TextField} from '../components/form/'

export function Navbar() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return (
        <nav
            className={clsx(
                'border-b fixed w-full z-30 px-2 sm:px-4 py-4 transition-all',
                {
                    'bg-transparent border-transparent': !trigger,
                    'bg-black/80 border-gray-600': trigger,
                }
            )}
        >
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <img
                        src="./logo-smartcine.svg"
                        className="w-full mr-3 sm:h-9"
                        alt="SmartCine Logo"
                    />
                    <span className="self-center text-2xl font-serif font-bold whitespace-nowrap text-white">
                        SmartCine
                    </span>
                </Link>

                <div className="flex md:order-2">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                    >
                        <Search size={32} className="text-white" />
                        <span className="sr-only">Search</span>
                    </button>

                    <div className="relative hidden md:block">
                        <TextField
                            icon={Search}
                            type="text"
                            id="search-navbar"
                            placeholder="O que você procura ?"
                            className="bg-gray-900/60 w-[350px] shadow text-md focus:bg-gray-900/80"
                        />
                    </div>

                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                    >
                        <MenuIcon fontSize={24} color="text-white" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
