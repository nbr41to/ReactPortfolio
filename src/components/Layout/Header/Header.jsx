import React from "react"
import { Link } from "react-router-dom"
import { StyledComponent } from "./Header.styled"
import site_logo from "./logo_circle.png"

const Header = () => (
  <StyledComponent className="header item">
    <Link to="/"><img src={site_logo} alt="site_logo"/></Link>
    <h1>Knob's Portfolio</h1>
  </StyledComponent>
)

export default Header
