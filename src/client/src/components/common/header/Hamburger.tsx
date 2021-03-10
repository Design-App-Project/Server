import styled from 'styled-components';

const Hamburger = styled.div<{open:boolean}>`
  width : 30px;
  height : 4px;
  background-color : ${({open}) => open
                                ? '#24272b'
                                : '#fff'
  };
  transition : all 0.3s linear;
  float : left;
  margin : 3px 0;
  z-index : 10;
`

export default Hamburger;