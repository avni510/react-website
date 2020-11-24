import styled from 'styled-components';

export const Menu = styled.nav<{isMenuOpen: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${props  => props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: ${props => props.theme.view.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${props => props.theme.view.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${props => props.theme.colors.primaryHover};
    }
  }
`;
