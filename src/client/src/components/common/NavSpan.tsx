import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const NavSpan = styled.span<INavSpan>`
  min-width : 50%;
  display : flex;
  justify-content : center;
  align-items : center;
  height : 36px;
  font-size : 24px;
  text-align : center;
  margin : 10px 0;
  font-family : AvenirNextLTPro-Demi;
  font-weight : 900;
  letter-spacing : 2px;
  cursor : pointer;
  color : ${(props) => props.open ? `${color.gray3}` : `${color.gray5}`};

  @media (max-width : 414px) {
    font-size : 18px;
  }
`;

interface INavSpan {
  open : boolean;
}

export default NavSpan;