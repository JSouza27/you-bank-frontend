import styled from 'styled-components';

const NavContainer = styled.div`
  & > .descktop-navigation {
    display: none;
  }

  & > .mobile-navigation {
    display: flex;
  }

  @media (min-width: 600px) {
    
  }
`;

export default NavContainer;
