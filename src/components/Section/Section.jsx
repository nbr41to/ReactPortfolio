import React from "react"
import { StyledComponent } from "./Section.styled"

const Section = ({ section }) => {
    console.log(section.list)
    const List = ({ section }) => {
        if (section.list.length === 0) {
            return <></>
        } else {
            return (
                <ul>
                    {(section.listTitle) ? <h3>{section.listTitle}</h3> : <></>}
                    {section.list.map((item) => <li>{item}</li>)}
                </ul>
            )
        }
    }
    return (
        <StyledComponent className="main item">
            <section>
                <h2>{section.title}</h2>
                {(section.text1) ? <p>{section.text1}</p> : <></>}
                <List section={section} />
                {(section.text2) ? <p>{section.text2}</p> : <></>}
            </section>
        </StyledComponent>
    )
}

export default Section;