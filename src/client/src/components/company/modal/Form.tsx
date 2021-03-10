import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Form = styled.div`
  flex: 1;
  height: 314px;
  color: ${color.gray3};
  font-family: SpoqaHanSansNeo;
  padding-right: 29px;
  display: inline-block;

  &>div:last-child {
    margin: 0;
  }
`;

export default Form;