import React from "react"
import { StyledComponent } from "./Quote.styled"

const Quote = ({ children }) => {
    return (
        <StyledComponent>
            <p>【引用】</p>
            {children}
        </StyledComponent>
    )
}

export default Quote;