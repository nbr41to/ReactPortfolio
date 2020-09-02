import React from "react"
import { StyledComponent } from "./Section.styled"

/**
 * sectionの種類
 * title
 * 各所にtext
 * list
 * image
 * iframe
 */


const Section = ({ section }) => {
    // console.log(section.list)
    const List = ({ section }) => {
        if (section.list.length === 0) {
            return <></>
        } else {
            return (
                <ul>
                    {(section.listTitle) ? <h3>{section.listTitle}</h3> : <></>}
                    {section.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            )
        }
    }
    return (
        <StyledComponent wide={section.wide ? section.wide : ""}>
            {section.title && <h2>{section.title}</h2>}
            <div className="section_inner">
                <div className="text_box">
                    {section.text1 && <p>{section.text1}</p>}
                    {section.list && <List section={section} />}
                    {section.text2 && <p>{section.text2}</p>}
                </div>
                {(section.image || section.movie || section.discription) &&
                    <div className="view_box">
                        {section.image && section.image}
                        {section.movie && <iframe src={section.movie}></iframe>}
                        {section.discription && <p>{section.discription}</p>}
                    </div>
                }
            </div>
        </StyledComponent>
    )
}

export default Section;