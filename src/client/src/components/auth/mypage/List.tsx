import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const List = styled.div<{open:boolean}>`
  width : 112px;
  height : 36px;
  border-radius : 18px;
  color : ${(props) => props.open ? `${color.gray7}`: `${color.gray3}`};
  background-color : ${(props) => props.open ? `${color.blue0}`: `${color.white}`};
  cursor: pointer;
  display : flex;
  justify-content :center;
  align-items : center;
`;

export default List;