import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const CheckContainer = styled.div`
  max-width : 339px;
  width : 100%;
  padding : 12px 15px;
  border : 1px solid ${color.gray5};
  border-radius : 3px;
  margin-bottom : 14px;
  font-size : 15px;
  color : ${color.gray3};
  cursor: pointer;
`;

export default CheckContainer;