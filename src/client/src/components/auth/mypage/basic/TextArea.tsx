import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const TextArea = styled.textarea`
  width : 100%;
  height : 126px;
  padding : 10px 15px;
  font-family : SpoqaHanSansNeo;
  font-size : 15px;
  color : ${color.gray3};
  margin : 12px 0 0 0;
  border-radius : 3px;
  border : 1px solid ${color.gray5};
  resize : none;
`;

export default TextArea;