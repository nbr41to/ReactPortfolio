import React from "react"
import { StyledComponent } from "./ImageSection.styled"

export default ({ image, title, text }) => {
    return (
        <StyledComponent>
            <img src={image} />
            <div className="text_box">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </StyledComponent>
    )
}

export default Section;