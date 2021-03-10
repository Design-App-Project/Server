import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Navigation = styled.ul`
  display : flex;
  justify-content : center;
  align-items: center;
  font-size: 10px;
  font-family: SpoqaHanSansNeo;
  height : 12px;
  max-width: 339px;
  width: 100%;
  color : ${color.gray5};

  & > li {
    width : 105px;
    text-align: center;
  }

  & > li:nth-child(2) {
    border-left : 1px solid ${color.gray5};
    border-right : 1px solid ${color.gray5};
  }
  & > li > a {
    color : ${color.gray5};
  }
`;

export default Navigation;