import React from "react";
import { StyledComponent } from "./Left.styled"
import Menu from "../../Menu"

const Left = () => (
  <StyledComponent className="left item">
    <Menu row={false} />
  </StyledComponent>
)

export default Left