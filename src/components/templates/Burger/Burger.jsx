import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen, ...props }) => {


  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div>
        <span />
        <span />
        <span />
      </div>
      <div className="overlay" onClick={() => setOpen(false)}></div>
    </StyledBurger>
  )
}


export default Burger;
