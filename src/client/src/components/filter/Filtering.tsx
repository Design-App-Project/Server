import styled from 'styled-components';

const Filtering = styled.div`
  width : 100%;
  height : 500px;
  margin-top : 59px;
  display : flex;
  flex-wrap : wrap;
  /* justify-content : space-between; */
  align-items : flex-start;
  &>div:nth-child(5) {
    margin-bottom : 0;
  }
`;

export default Filtering;