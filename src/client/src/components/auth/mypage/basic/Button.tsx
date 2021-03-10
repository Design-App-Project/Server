import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Button = styled.button`
  width : 84px;
  height : 36px;
  border-radius: 3px;
  background-color: ${color.gray5};
  margin-top : 10px;
  color: ${color.white};
  border : none;
  cursor: pointer;
  position: absolute;
  right: 0px;
`;

export default Button;