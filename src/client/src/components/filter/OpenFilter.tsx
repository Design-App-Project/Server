import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const OpenFilter = ({onClick}:IOpenFilter) => {
  return <Img onClick={onClick} src="images/icons/Filter.png" />
}

interface IOpenFilter {
  onClick : ()=>void;
}

const Img = styled.img<{onClick:()=>void}>`
  background-color : ${color.gray1};
  border : none;
  outline : none;
  border-radius : 4px;
  padding : 5px;
  position : absolute;
  bottom : 5px;
  left : calc( 50% - 10px);
  cursor: pointer;
`;



export default OpenFilter;