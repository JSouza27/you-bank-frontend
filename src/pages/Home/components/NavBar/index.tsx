import React from 'react';
import { NavContextProvider } from '../../../../contexts/MenuContext';
import DescktopNav from '../DesktopNav';
import MobileNav from '../MobileNav';
import NavContainer from './styled';

const NavBar = () => {
  return (
    <NavContainer>
      <NavContextProvider>
        <DescktopNav />
        <MobileNav />
      </NavContextProvider>
    </NavContainer>
  );
};

export default NavBar;
