import React, { useState } from "react"
import Header from "./Header"
import Left from "./Left"
import Right from "./Right"
import Main from "./Main"
import Footer from "./Footer"

import "../../../styles/reset.css"
import { GlobalStyle } from "../../../styles/GlobalStyle"
import { StyledComponent } from "./Layout.styled"


const Layout = ({ children }) => {
  const [hamOpen, setHamOpen] = useState("aa")
  return (
    <StyledComponent hamOpen={hamOpen}>
      <GlobalStyle />
      <Header hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <Left hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <Right />
      <Main children={children} />
      <Footer />
    </StyledComponent>
  )
}

export default Layout
