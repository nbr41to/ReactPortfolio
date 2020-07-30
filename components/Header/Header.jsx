import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledComponent } from "./Header.styled"
import site_logo from "./logo_circle.png"

const Header = ({ siteTitle }) => (
  <StyledComponent className="header item">
    <Link to="/"><img src={site_logo} alt="site_logo"/></Link>
    <h1>SiteTitle</h1>
  </StyledComponent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
