import React from 'react';
import { Link } from 'react-router-dom';
import iconLogin from '../../../../assets/ico/icone-login.svg';
import { LinkContainer, LinkLeft, LinkRight } from './style';

const NavLinks = () => (
  <LinkContainer>
    <LinkLeft>
      <Link to="*">Sobre nós</Link>
      <Link to="*">Para Você</Link>
      <Link to="*">Para sua Empresa</Link>
      <Link to="*">Suporte</Link>
    </LinkLeft>
    <LinkRight>
      <Link to="*">
        <img src={iconLogin} alt="login" />
        <span>Fazer login</span>
      </Link>
      <Link to="*">Cadastre-se</Link>
    </LinkRight>
  </LinkContainer>
);

export default NavLinks;
