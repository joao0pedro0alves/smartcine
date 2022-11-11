import Image from 'next/image'
import {InstagramLogo, GithubLogo, LinkedinLogo} from 'phosphor-react'

import themoviedb from '../assets/themoviedb.svg'

interface ContainerProps {
    children?: React.ReactNode
    Header?: () => JSX.Element
}

export function Container({children, Header}: ContainerProps) {
    return (
        <main>
            {Header ? <Header /> : null}
            <div className="container mx-auto">{children}</div>

            <footer className="w-full bg-gray-800">
                <div className="container mx-auto py-4 flex justify-between">
                    <div>
                        <a href="https://www.themoviedb.org/documentation/api">
                            <Image
                                alt=""
                                src={themoviedb}
                                width={150}
                                height={100}
                            />
                        </a>
                    </div>

                    <div>
                        <span className="text-zinc-300 text-sm">
                            &#169; Todos os recursos de imagem e dados pertencem
                            ao themoviedb.org.
                        </span>
                    </div>

                    <div className="flex gap-2 text-white">
                        <a
                            className="hover:opacity-80 transition-opacity"
                            href="https://www.instagram.com/joaao_alvess/"
                        >
                            <InstagramLogo size={30} />
                        </a>
                        <a
                            className="hover:opacity-80 transition-opacity"
                            href="https://github.com/joao0pedro0alves"
                        >
                            <GithubLogo size={30} />
                        </a>
                        <a
                            className="hover:opacity-80 transition-opacity"
                            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-alves-pereira-bb0052216/"
                        >
                            <LinkedinLogo size={30} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
