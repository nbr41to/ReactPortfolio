import React from "react"
import { Link, useLocation } from "react-router-dom"
import { StyledComponent } from "./Menu.styled"
import { menu } from '../../../contents.js'

const Menu = ({ row }) => {
  const location = useLocation()
  return (
    <StyledComponent row={row}>
      <h2>― <strong>MENU</strong> ―</h2>
      <ul>
        {menu.map((list, index) => {
          const path = `/${list.path}`
          return (
            <li className={location.pathname === "/" + list.path ? 'active' : ''} key={index}>
              <Link to={path}>
                {list.icon}
                <span>{list.title}</span>
              </Link>
            </li>
          )
        })}
        {/* ここできたときまじ,嬉しかった */}
      </ul>
    </StyledComponent>
  )
};

export default Menu