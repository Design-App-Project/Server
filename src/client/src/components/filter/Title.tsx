import styled from 'styled-components';

const Title = styled.span`
  font-size : 26px;
  height : 30px;
  font-family : AvenirNextLTPro;
  font-weight : bold;
  letter-spacing : 1.3px;

  @media (max-width : 414px) {
    display : block;
    width : 100%;
    text-align : center;
    font-size : 18px;
    padding-top : 4px;
  }
`;

export default Title;