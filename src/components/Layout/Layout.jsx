import React from "react"
import Header from "../Header"
import Left from "../Left"
import Main from "../Main"
import Footer from "../Footer"

import "../../styles/reset.css"
import { GlobalStyle } from "../../styles/GlobalStyle"
import { StyledComponent } from "./Layout.styled"


const Layout = ({ children }) => {

  return (
    <StyledComponent>
      <GlobalStyle />
      <Header />
      <Left />
      <Main children={children}/>
      <Footer />
    </StyledComponent>
  )
}

export default Layout
