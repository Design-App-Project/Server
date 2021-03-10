import styled from 'styled-components';

const Container = styled.div`
  max-width : 962px;
  width : 100%;
  margin : 0 auto;
  padding : 33px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  & > div:nth-child(3n) {
      margin-right : 0;
  }
`;

export default Container;