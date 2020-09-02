import React from "react"
import { Link } from "react-router-dom"
import { StyledComponent } from "./Footer.styled"
import IconButton from '@material-ui/core/IconButton';
import { Twitter, GitHub } from '@material-ui/icons';
const Footer = () => (
  <StyledComponent className="footer item">
    <small>Copyright 2020 @ Knob</small>
    <Link className="btn" to="https://twitter.com/Knob_nbr41to">
      <Twitter />
    </Link>
    <Link className="btn" to="https://github.com/nbr41to">
      <GitHub />
    </Link>
  </StyledComponent>
)

export default Footer