import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Button = styled.button`
  width: 84px;
  display: flex;
  height: 36px;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  background-color: ${color.gray5};
  border: none;
  border-radius: 3px;
  margin-left: 5px;

  & > label {
    width : 84px;
    height : 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Button;