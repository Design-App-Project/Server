import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Title = styled.div`
  width : 100%;
  height : 164px;
  background : ${color.gray2};
  color : ${color.white};
  display : flex;
  justify-content : center;
  align-items : center;
  font-weight : bold;
  font-family : AvenirNextLTPro;
  font-size : 30px;
  letter-spacing : 2px;
  border-top-left-radius : 8px;
  border-top-right-radius : 8px;
`

export default Title;