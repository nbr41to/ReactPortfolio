import React, { useState } from "react"
import { Link } from "react-router-dom"
import { StyledComponent } from "./Menu.styled"
import { Home, Face, BusinessCenter, MailOutline, LaptopChromebook } from '@material-ui/icons';
const Menu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledComponent>
      <nav>
        <ul onTouchStart="">
          <h2>― <strong>MENU</strong> ―</h2>
          <li>
            <Link to="/" className={selectedIndex === 0 ? "active" : ""} onClick={(event) => handleListItemClick(event, 0)}>
              <Home className="icon" />
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={selectedIndex === 1 ? "active" : ""} onClick={(event) => handleListItemClick(event, 1)}>
              <Face className="icon" />
              <span>ABOUT</span>
            </Link>
          </li>
          <li
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <Link to="/work">
              <LaptopChromebook className="icon" />
              <span>WORK</span>
            </Link>
          </li>
          <li
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <Link to="/contact">
              <MailOutline className="icon" />
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledComponent>
  )
};

export default Menu