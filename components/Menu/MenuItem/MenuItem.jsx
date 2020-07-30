import { Link } from "gatsby"
import React from "react"
import { StyledComponent } from "./MenuItem.styled"

const MenuItem = (props, { children }) => {
    return (
        <StyledComponent className={props.name}>
            <Link to="/">
                {props.icon}
                <span>{props.text}</span></Link>
        </StyledComponent>
    )
};
export default MenuItem