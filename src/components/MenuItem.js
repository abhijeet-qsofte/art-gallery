import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import styled from 'styled-components';

const MenuItemWrapper = styled.li`
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const MenuLink = styled(NavLink)`
  /* Use the imported NavLink from react-router-dom */
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

function MenuItem({ to, children }) {
  /* Add 'to' prop for NavLink destination */
  return (
    <MenuItemWrapper>
      <MenuLink to={to}>{children}</MenuLink>
    </MenuItemWrapper>
  );
}

export default MenuItem;
