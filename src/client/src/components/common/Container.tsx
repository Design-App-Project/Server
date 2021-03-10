import styled from 'styled-components';

export const Container = styled.div`
  max-width : 1024px;
  margin : 0 auto;
  padding-left : 20px;
  padding-right : 20px;
  padding-bottom : 20px;
  position : relative;

  @media (max-width : 414px) {
    padding : 0;
  }
`;

export default Container;