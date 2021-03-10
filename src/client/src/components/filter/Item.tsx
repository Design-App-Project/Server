import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Item = styled.li`
  font-family: SpoqaHanSansNeo;
  font-size : 18px;
  list-style : none;
  color : ${color.gray3};
  margin-bottom : 54px;
  cursor : pointer;
  letter-spacing : 2px;

  @media (max-width : 414px) {
    font-size : 15px;
    display : inline-block;
    margin-bottom : 37px;
    width : 20%;
    text-align : center;
  }
`;

export default Item;