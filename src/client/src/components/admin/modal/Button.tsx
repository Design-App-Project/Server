import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Button = styled.button`
  cursor: pointer;
  width : 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: ${color.gray4};
  color: ${color.gray0};
  padding: 10px;
  border : none;
  border-radius: 3px;
  letter-spacing: 1px;
`;

export default Button;