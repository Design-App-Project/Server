import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Button = styled.button`
  background-color: ${color.gray4};
  color: ${color.gray0};
  padding : 10px 20px;
  letter-spacing: 3px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  margin-right: 5px;
`;

export default Button;