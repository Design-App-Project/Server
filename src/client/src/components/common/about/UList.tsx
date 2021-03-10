import styled from 'styled-components';
import color from 'lib/styles/pallettes';

export const Ul = styled.ul`
  margin : 16px 0 37px 0;
  &>li {
    margin-bottom : 10px;
    list-style : none;
    font-family : SpoqaHanSansNeo;
    font-size : 12px;
    letter-spacing : 1px;
    color : ${color.black1};
  }
`;

export default Ul;