import styled from 'styled-components';

const MobileContainer = styled.nav`

  & > ul {
    background-color: var(--color-grey);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

export default MobileContainer;
