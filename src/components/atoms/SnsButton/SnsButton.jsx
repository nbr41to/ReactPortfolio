import React from "react"
import { StyledComponent } from "./SnsButton.styled"

export default ({ title, icon, url }) => {
    return (
        <StyledComponent>
            <button>
                <h2>{title}</h2>

            </button>
        </StyledComponent>
    )
}

export default Section;