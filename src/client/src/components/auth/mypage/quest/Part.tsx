import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Part = styled.div<{open:boolean}>`
  color : ${(props)=>props.open ? `${color.gray3}` : `${color.gray5}`};
  padding : 0px 15px;
  font-size: 20px;
  cursor: pointer;
`;

interface IPart {
  open : boolean;
  setOpen : () => void;
}

export default Part;