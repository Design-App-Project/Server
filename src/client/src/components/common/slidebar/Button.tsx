import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Button = styled.button`
  margin : 0 auto;
  width : 262px;
  height : 32px;
  display : flex;
  justify-content : center;
  align-items : center;
  background : ${color.black1};
  color : ${color.white};
  font-size : 15px;
  font-family : 'Spoqa Han Sans Neo', 'sans-serif';
  border-radius : 3px;
  font-size : 15px;
  cursor : pointer;

  & > a {
    width : 100%;
    display : inline-block;
  }
`;

export default Button;