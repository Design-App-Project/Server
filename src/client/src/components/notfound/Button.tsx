import styled from 'styled-components';

const Button = styled.button`
  box-shadow : 0 6px 10px 0 rgba(0, 0, 0, 0.05);
  width : 230px;
  height : 50px;
  font-size : 18px;
  font-family : AvenirNextLTPro;
  margin : 0 auto;
  display : block;
  border-radius : 5px;
  border : none;
  & > a {
    color : black;
    width : 100%;
    display : inline-block;
  }
`;

export default Button;