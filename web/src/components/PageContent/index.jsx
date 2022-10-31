import React from "react"

import { useMediaQuery, useTheme } from "@material-ui/core"

import { BackPaper, ContentContainer } from "./styles"

export default function PageContent({ children, ...props }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <>
            <BackPaper elevation={5}>
                <ContentContainer
                    {...props}
                    className={IS_MOBILE ? "mobileContainer" : ""}
                >
                    {children}
                </ContentContainer>
            </BackPaper>
        </>
    )
}
