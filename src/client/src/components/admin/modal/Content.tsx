import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Content = styled.div`
  width : 100%;
  max-width: 400px;
  padding : 20px;
  background-color: ${color.white};
  border-radius: 5px;
  border: none;
  display: flex;
  flex-wrap: wrap;
`;

export default Content;