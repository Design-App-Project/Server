import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${color.gray5};
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export default Input;