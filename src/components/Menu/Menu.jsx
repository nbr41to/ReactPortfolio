import React, { useState } from "react"
import { Link } from "react-router-dom"
import { StyledComponent } from "./Menu.styled"
import { Home, Face, BusinessCenter, MailOutline, LaptopChromebook } from '@material-ui/icons';
import { menu } from '../../contents.js'

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <StyledComponent>
      <nav>
        <ul>
          <h2>― <strong>MENU</strong> ―</h2>
          {menu.map((list, index) => {
            const path = `/${list.path}`
            return (
              <li className={activeIndex === index ? 'active' : ''}>
                <Link to={path} onClick={() => { activeChange(index) }}>
                  {list.icon}
                  <span>{list.title}</span>
                </Link>
              </li>
            )
          })}
          {/* ここできたときまじ,嬉しかった */}
        </ul>
      </nav>
    </StyledComponent >
  )
};

export default Menu