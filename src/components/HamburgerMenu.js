import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuBtn = styled.div`
  cursor: pointer;
  padding: 15px;
  @media (min-width: 768px) {
    display: none; /* Hide the button on larger screens */
  }
`;

const Burger = styled.div`
  width: 30px;
  height: 4px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;

  &.open {
    background-color: transparent;
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${(props) =>
      props.open
        ? 'flex'
        : 'none'}; /* Show/hide the menu items based on the 'open' prop */
    background-color: white;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* The hamburger menu button */}
      <MenuBtn onClick={handleMenuToggle}>
        <Burger className={isMenuOpen ? 'open' : ''} />
      </MenuBtn>

      {/* The menu items */}
      <MenuItems open={isMenuOpen}>
        {/*
          Render your menu items here
          Example: <li><a href="#">Home</a></li>
        */}
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/pages/Artworks">Artworks</MenuItem>
        <MenuItem to="/artists">Artists</MenuItem>
        <MenuItem to="/exhibitions">Exhibitions</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </MenuItems>
    </>
  );
}

export default HamburgerMenu;
