import React from 'react';
import logo from '../images/logo.png'; // Assuming you have a logo image file named "logo.png" in the images folder
import styled from 'styled-components';

const LogoWrapper = styled.div`
  flex: 1;
`;

const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="Company Logo" />
    </LogoWrapper>
  );
}

export default Logo;
