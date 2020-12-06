import styled from 'styled-components';

export const Menu = styled.nav<{isMenuOpen: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightGrey;
  height: 5%;
  width: 20%;
  text-align: left;
  padding: 30px;
  position: absolute;
  top: 50px;
  left: 0;
  transition: top 0.3s ease-in-out;
  transform: ${props => props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: ${props => props.theme.view.mobile}) {
    width: 100%;
  }

  a {
    font-size: 20px;
    text-transform: lowercase;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    writing-mode: vertical;
    padding: 5px;

    @media (max-width: ${props => props.theme.view.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;
