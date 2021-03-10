import styled from 'styled-components';

const NavWrapper = styled.div`
  max-width : 1024px;
  height : 50px;
  margin : 0 auto 30px auto;
  display : flex;
  flex-wrap : wrap;
  
  span:nth-child(1) {
    border-right : 1px solid #333;
  }

  @media (max-width : 414px) {
    margin : 0 auto 16px auto;    
  }
`;

export default NavWrapper;