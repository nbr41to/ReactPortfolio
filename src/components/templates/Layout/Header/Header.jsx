import React, { useState } from "react"
import { Link } from "react-router-dom"
import { StyledComponent } from "./Header.styled"
import lab_logo from "./lab_title.png"
import Menu from "../../Menu"
import Burger from "../../Burger"

const Header = ({ hamOpen, setHamOpen }) => {
  return (
    <StyledComponent className="header item">
      <div className="logo_box">
        <Burger open={hamOpen} setOpen={setHamOpen} />
        <Link to="/"><img src={lab_logo} alt="site_logo" /></Link>
      </div>
      <Menu row={true} />
    </StyledComponent>
  )
}
export default Header
