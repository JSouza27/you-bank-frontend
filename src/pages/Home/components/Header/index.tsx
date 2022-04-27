import React from 'react';
import logotipo from '../../../../assets/ico/logotipo svg.svg';
import NavBar from '../NavBar';
import WrapperHeader from './style';

const Header = () => (
  <WrapperHeader>
    <img src={logotipo} alt="logo" />
    <NavBar />
  </WrapperHeader>
);

export default Header;
