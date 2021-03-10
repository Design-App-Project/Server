import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Part = styled.button`
  background-color: ${color.gray4};
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${color.gray0};
  border: none;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
`

export default Part;