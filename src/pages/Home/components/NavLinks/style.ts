import styled from 'styled-components';

const LinkContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const LinkLeft = styled.ul`
  align-items: center;
  background-color: var(--color-dark-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  width: 100%;

  & > a {
    color: var(--color-white);
    font-size: 1.25em;
    font-family: var(--font-family-Raleway);
    font-weight: var(--font-weight-600);
    line-height: 1.5em;
    margin: 0 1em 0 0;
    padding: 1.5em 0;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }

  @media (min-width: 600px) {
    & > a:hover {
      background-color: var(--color-medium-grey);
      border-radius: 20px;
    }
  }

  @media (min-width: 1200px) {
    margin: 0 1em 0 0;
    padding: 0.5em 1.68em;
  }

  @media (min-width: 1800px) {
    margin: 0 1em 0 0;
    padding: 0.5em 1.68em;
  }
`;

const LinkRight = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  width: 100%;

  & > a {
    text-decoration: none;
    font-family: var(--font-family-Raleway);
    font-weight: var(--font-weight-600);
    line-height: 1.5em;
    padding: 1.5em 0;
    text-align: center;
    width: 100%;
  }

  & > a:nth-child(1) {
    align-items: center;
    color: var(--color-white);
    display: flex;
    justify-content: center;
    padding: 1.5em 0;

    & > img {
      margin-right:  0.625em;
    }
  }

  & > a:nth-child(2) {
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 1.5em 0;
  }

  @media (min-width: 600px) {
    & > a:nth-child(1) {
      margin-right: 4.43em;
    }

    & > a:nth-child(2) {
      background-color: var(--color-white);
      border-radius: 20px;
      color: var(--color-black);
      padding: 0.5em 1.06em;
    }
  }

  @media (min-width: 1200px) {

  }

  @media (min-width: 1800px) {

  }
`;

export {
  LinkContainer,
  LinkLeft,
  LinkRight,
};
