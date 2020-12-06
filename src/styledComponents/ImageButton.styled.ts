import styled from 'styled-components';

export const ImageButton = styled.button<{isHighlighted: boolean, percentage: number}>`
  display:block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  background: ${props => props.isHighlighted ? '#2E4053' : 'lightGrey'};
  margin: 0;
  position: absolute;
  top: -4%;
  transform: translate(${props => props.percentage}%, 500%);
  right: 55%;
  outline:none;
`;
