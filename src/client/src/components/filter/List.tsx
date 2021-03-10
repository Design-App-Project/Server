import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const List = styled.ul`
  max-width : 308px;
  width : 20%;
  height : auto;
  &>li:nth-child(1) {
    font-size : 22px;
    letter-spacing : 1px;
    font-family : SpoqaHanSansNeo;
    margin-bottom : 36px;
    cursor : default;
    font-weight : bold;
  }

  @media (max-width : 414px) {
    width : 308px;
    margin : 0 auto;
    &>li:nth-child(1) {
      width : 100%;
      display : block;
      font-size : 16px;
      text-align : left;
      margin-bottom : 22px;
    }
  }
`;

export default List;