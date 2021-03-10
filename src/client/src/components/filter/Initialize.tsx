import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Initialize = styled.span`
  position : absolute;
  width : auto;
  color : ${color.gray2};
  font-family : AvenirNextLTPro-Demi;
  font-size : 12px;
  text-align : center;
  border-bottom : 1px solid ${color.gray2};
  right : 45px;
  bottom : 10px;
  cursor: pointer;

  @media (max-width : 414px) {
    right : 18px;
  }
`;

export default Initialize;