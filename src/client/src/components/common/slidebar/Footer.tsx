import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Footer = () => {
  return (
    <Container>
      <Title>3355LAB</Title>
      <Ul>
        <li>주소 : 서울시 광진구 광나루로 19길 23 가온누리 209호</li>
        <li>사업자등록번호 : 373 - 31 - 01051</li>
        <li>Email : contact@3355lab.com</li>
      </Ul>
      <Rights>COPYRIGHT (C) ALL RIGHTS RESERVED. DESIGNED BY 3355LAB</Rights>
    </Container>
  )
}

const Container = styled.div`
  width : 262px;
  position : absolute;
  bottom : 30px;
  left : 28px;
  text-align : left;

  @media (max-width : 414px) {
    bottom : 155px;
  }
`;

const Title = styled.span`
  display : block;
  font-family : AvenirLTStd-95Black;
  font-size : 18px;
  font-weight : 900;
  letter-spacing : 1px;
  color : ${color.black1};
`;

const Ul = styled.ul`
  margin : 16px 0 37px 0;
  &>li {
    margin-bottom : 10px;
    list-style : none;
    font-family : SpoqaHanSansNeo;
    font-size : 10px;
    letter-spacing : 1px;
    color : ${color.black1};
  }
`;

const Rights = styled.span`
  width : 257px;
  display : block;
  color : ${color.black1};
  font-size : 8px;
  font-family : AvenirNextLTPro;
  letter-spacing : -0.3px;
`;

export default Footer;

