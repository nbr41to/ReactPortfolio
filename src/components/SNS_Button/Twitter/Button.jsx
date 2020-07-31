import { Link } from "react-router-dom"
import React from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import { StyledComponent } from "./Button.styled"

const Button = () => (
    <StyledComponent>
        <Link to="https://twitter.com/Knob_nbr41to">
            <TwitterIcon fontSize="large" />
        </Link>
    </StyledComponent>
)

export default Button
