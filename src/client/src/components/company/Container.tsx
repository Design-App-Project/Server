import styled from 'styled-components';

const Container = styled.div`
  max-width : 962px;
  height : auto;
  margin : 16px auto;
  display : flex;
  flex-wrap : wrap;
  justify-content : flex-start;
  overflow-y : auto;

  & > div:nth-child(3n) {
      margin-right : 0;
    }
  
  @media (max-width : 965px) {
    width : 634px;
    & > div {
      margin-bottom : 19px;
    }
    & > div:nth-child(odd) {
      margin-right : 18px;
    }
    & > div:nth-child(2n) {
      margin-right : 0;
    }
  }

  @media (max-width : 414px) {
    width : 100%;
    justify-content : center;
    & > div:nth-child(odd) {
      margin-right : 0;
    }
    & > div:nth-child(2n) {
      margin-right : 0;
    }
  }
`;

export default Container;