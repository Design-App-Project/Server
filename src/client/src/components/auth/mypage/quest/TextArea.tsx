import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const TextArea = styled.textarea`
  resize: none;
  width : 100%;
  height : 273px;
  border-radius: 3px;
  border: 1px solid ${color.gray5};
  margin-top: 12px;
  padding : 14px 0 0 15px;
`;

export default TextArea;