import React from "react";
import { Link } from "react-router-dom";
import { StyledComponent } from "./Left.styled"
import Menu from "../Menu"

const Left = () => (
  <StyledComponent className="left item">
    <Menu />
  </StyledComponent>
)

export default Left