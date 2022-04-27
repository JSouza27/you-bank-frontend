import styled from 'styled-components';

const WrapperHeader = styled.section`
  align-items: center;
  border: 2px solid yellow;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  height: 6.25em;
  padding: 0 1em;
  width: 100%;

  & > img {
    width: 9em;
  }

  @media (min-width: 600px) {
    & > img {
      width: 13em;
    }
  }
`;

export default WrapperHeader;
