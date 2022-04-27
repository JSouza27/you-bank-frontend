import React, { useContext, useEffect } from 'react';
import noScroll from 'no-scroll';
import NavLinks from '../NavLinks';
import MobileContainer from './styled';
import { NavContext } from '../../../../contexts/MenuContext';
import HambugerButton from '../HamburgerButton';

const MobileNav = () => {
  const { isOpenMenu } = useContext(NavContext);

  const toggleScroll = (bool: boolean) => {
    if (bool) {
      return noScroll.on();
    }

    return noScroll.off();
  };

  useEffect(() => {
    toggleScroll(isOpenMenu);
  }, [isOpenMenu]);

  return (
    <MobileContainer className="mobile-navigation">
      <HambugerButton />
      {
        isOpenMenu && <NavLinks />
      }
    </MobileContainer>
  );
};

export default MobileNav;
