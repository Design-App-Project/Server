import { IHedaer } from 'lib/interfaces/header';
import styled from 'styled-components';

const Menu = styled.div<IHedaer>`
  width : 30px;
  height : auto;
  cursor: pointer;
  position : absolute;
  top : 25px;
  left : 30px;
  /* z-index :  5; */
  &:after {
    content : '';
    display : block;
    clear : both;
  }
`;

export default Menu;