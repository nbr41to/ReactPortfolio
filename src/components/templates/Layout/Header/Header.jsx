import React, { useState } from "react"
import { Link } from "react-router-dom"
import { StyledComponent } from "./Header.styled"
import lab_logo from "./lab_ttl_logo.png"
import Menu from "../../Menu"
import Burger from "../../Burger"

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false)

  return (
    <StyledComponent className="header item">
      {/* <h1>Knob's Portfolio</h1> */}
      <div className="logo_box">
        <Link to="/"><img src={lab_logo} alt="site_logo" /></Link>
      </div>
      <Menu row={true} />
      <Burger open={hamOpen} setOpen={setHamOpen} />
    </StyledComponent>
  )
}
export default Header
