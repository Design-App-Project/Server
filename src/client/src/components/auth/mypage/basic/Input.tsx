import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Input = styled.input<{height:number}>`
  height : ${(props) => `${props.height}px`};
  width : 100%;
  padding : 10px 15px;
  font-family : SpoqaHanSansNeo;
  font-size : 15px;
  color : ${color.gray3};
  margin : 12px 0 19px 0;
  border-radius : 3px;
  border : 1px solid ${color.gray5};
`;

export default Input;