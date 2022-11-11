interface ContainerProps {
    children?: React.ReactNode
    Header?: () => JSX.Element
}

export function Container({children, Header}: ContainerProps) {
    return (
        <main>
            {Header ? <Header /> : null}
            <div className="container mx-auto">{children}</div>
        </main>
    )
}
