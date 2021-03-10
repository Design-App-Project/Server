import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Tag = styled.span`
  color: ${color.gray4};
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 18px;
  width: calc(100% - 170px);
  display: inline-block;
  text-align: left;
  font-weight: bold;
`;

export default Tag;