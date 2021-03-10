import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Button = styled.button`
  max-width: 339px;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray5};
  color: ${color.white};
  font-family: SpoqaHanSansNeo;
  border-radius: 3px;
  border : none;
  margin-bottom: 20px;
  cursor : pointer;
`;

export default Button;