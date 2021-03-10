import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Selected = styled.div`
  padding : 5px 10px;
  font-size : 18px;
  font-family: AvenirNextLTPro;
  letter-spacing : 1px;
  color : ${color.black0};

  @media (max-width : 414px) {
    display : block;
    width : 100%;
    text-align : center;
    padding : 0;
    font-size : 15px;
  }
`;

export default Selected;