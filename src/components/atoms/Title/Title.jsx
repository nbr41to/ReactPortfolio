import React from "react"
import { StyledComponent } from "./Title.styled"

const Title = ({ children, size }) => {
    return (
        <StyledComponent size={size}>
            {children}
        </StyledComponent>
    )
}

export default Title;