import styled from 'styled-components';

const Container = styled.div`
  max-width : 962px;
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  padding-top: 33px;
  & > div:nth-child(3n) {
      margin-right : 0;
  }
`;

export default Container;