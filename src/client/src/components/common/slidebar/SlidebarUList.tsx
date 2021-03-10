import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const UList = styled.ul<{open:boolean}>`
  width : 317px;
  height : 100vh;
  background-color : ${color.white};
  position : fixed;
  padding-top : 80px;
  left : 0;
  top : 0;
  z-index : 3;
  transform : ${({open})=> open 
    ? 'translateX(0%)' 
    : 'translateX(-100%)'
  };
  transition : .5s ease-in-out;
  border-right : 2px solid #d4d4d4;
`;

export default UList;