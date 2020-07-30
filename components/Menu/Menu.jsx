import { Link } from "gatsby"
import React from "react"
import { StyledComponent } from "./Menu.styled"
import MenuItem from "./MenuItem"
import { Home, Face, Assignment, Create, MailOutline } from '@material-ui/icons';
const Menu = () => {
  // const icon = <Home />;
  return (
    <StyledComponent>
      <nav>
        <ul>
          <h2><strong>MENU</strong></h2>
          {/* <MenuItem
            className="home"
            text="HOME"
           icon={icon}
          /> */}
          <li className="home" icon={<Home />}><Link to="/"><Home className="icon" /><span>HOME</span></Link></li>
        <li className="about"><Link to="/about"><Face className="icon" /><span>ABOUT</span></Link></li>
        <li className="skill"><Link to="/skill"><Assignment className="icon" /><span>SKILL</span></Link></li>
        <li className="blog"><Link to="/blog"><Create className="icon" /><span>BLOG</span></Link></li>
        <li className="contact"><Link to="/contact"><MailOutline className="icon" /><span>CONTACT</span></Link></li>
        </ul>
      </nav>
    </StyledComponent>
  )
};

export default Menu