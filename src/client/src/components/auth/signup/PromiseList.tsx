import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const PromiseList = styled.div`
  max-width : 339px;
  width : 100%;
  padding : 0 0 12px 14px;
  color : ${color.gray5};
  font-size : 10px;
  font-family : SpoqaHanSansNeo;
  display : flex;
  flex-wrap : wrap;
  & > input[type="checkbox"] {
    border : 1px solid ${color.gray5};
    width : 10px;
    height : 10px;
    margin : 0 6px 0 0;
  }
`;

export default PromiseList;