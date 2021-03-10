import styled from 'styled-components';
import color from 'lib/styles/pallettes';
import Wrapper from './Wrapper';

const Set = () => {

  return (
    <Wrapper>
      <Card />
      <Label src="images/icons/Label.png" />
    </Wrapper>
  )
}

const Card = styled.div`
  max-width : 308px;
  width : 100%;
  height : 273px;
  background-color: ${color.gray0};
  border-radius: 8px;
  display : flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    width: 414px;
  }
`;

const Label = styled.img`
  width : 18px;
  height : 40px;
  position: absolute;
  z-index: 5;
  right: 25px;
  top: -5px;
`;

export default Set;