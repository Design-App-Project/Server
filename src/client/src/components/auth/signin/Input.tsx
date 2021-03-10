import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Input = styled.input`
  max-width : 339px;
  width : 100%;
  padding : 12px 15px;
  border: 1px solid ${color.gray5};
  border-radius: 3px;
  margin-bottom: 14px;
  height: 42px;
`;

export default Input;