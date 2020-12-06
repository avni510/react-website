import styled from 'styled-components';

type Props = {
  isMenuOpen: boolean
}

export const MenuIcon = styled.button<Props>`
  position: absolute;
  top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  height: ${({isMenuOpen}) => isMenuOpen ? '35px' : '60px'};
  background: ${props => props.theme.colors.pageBackground};
  border: none;
  cursor: pointer;
  padding: 0px;
  z-index: 10;
  padding-left: 30px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.12rem;
    background: ${props => props.theme.colors.primaryLight};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
  }

  div:last-child {
    margin-bottom: ${({isMenuOpen}) => isMenuOpen ? '2px' : '20px'}
  }
`;
