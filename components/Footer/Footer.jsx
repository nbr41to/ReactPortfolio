import { Link } from "gatsby"
import React from "react"
import { StyledComponent } from "./Footer.styled"

const Footer = () => (
  <StyledComponent className="footer item">
      © {new Date().getFullYear()}, Built with
          {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>

  </StyledComponent>
)

export default Footer