import styled from 'styled-components';
import color from 'lib/styles/pallettes';

export const Box = styled.div`
  max-width : 962px;
  width : 100%;
  min-height : 130px;
  background-color : ${color.gray1};
  margin : 0 auto;
  position : relative;
  display : flex;
  justify-content : left;
  align-items : flex-start;
  padding : 30px 0 0 30px;
  border-radius : 4px;
  flex-wrap : wrap;

  @media (max-width : 965px) {
    width : 634px;
  }
  @media (max-width : 414px) {
    width : 340px;
    padding : 14px 0 14px 0;
    min-height : 110px;
  }
`;

export default Box;