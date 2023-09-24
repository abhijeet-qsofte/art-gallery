import React from 'react';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import MenuItem from './MenuItem';
import './NavigationBar.css'; // Import a separate CSS file for NavigationBar styles

function NavigationBar() {
  return (
    <header>
      <nav>
        <Logo />
        <HamburgerMenu>
          
        </HamburgerMenu>
      </nav>
    </header>
  );
}

export default NavigationBar;
