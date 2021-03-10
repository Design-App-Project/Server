import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Card = styled.div`
  max-width : 308px;
  height : 273px;
  background-color : ${color.gray0};
  border-radius : 8px;
  margin-bottom : 19px;
  position : relative;
  display : flex;
  flex-wrap : wrap;
  align-items : flex-start;
  justify-content : center;
  margin-right : 18px;

  @media (max-width : 414px) {
    width: 414px;
  }
`;

export default Card;