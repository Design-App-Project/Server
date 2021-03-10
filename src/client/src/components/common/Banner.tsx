import styled from 'styled-components';
import color from 'lib/styles/pallettes';

export const Banner = styled.div`
  width : 100%;
  height : 300px;
  background : ${color.gray6};
  padding : 3% 0 0 17%;
  font-family : AvenirNextLTPro;
  font-weight : bold;
  font-size : 39px;
  letter-spacing : 1.5px;
  color : ${color.black0};

  @media (max-width : 1024px) {
    padding : 3% 0 0 3%;
  }

  @media (max-width : 414px) {
    display : none;
  }
`;

export default Banner;