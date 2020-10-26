import React from "react"
import { StyledComponent } from "./MarkdownSection.styled"
import ReactMarkdown from 'react-markdown'


const MarkdownSection = ({ markdown }) => {
    console.log(markdown)
    return (
        <StyledComponent>
            <h1>はい</h1>
            <ReactMarkdown source={markdown} />
        </StyledComponent>
    )
}

export default MarkdownSection;