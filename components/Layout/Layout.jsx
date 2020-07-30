import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import Left from "../Left"

import "../../styles/reset.css"
import { GlobalStyle } from "../../styles/GlobalStyle"
import { StyledComponent } from "./Layout.styled"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledComponent>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Left />
        <main className="main item">{children}</main>
        <Footer />
    </StyledComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
