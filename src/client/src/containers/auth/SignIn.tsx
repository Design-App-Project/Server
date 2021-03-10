import { useState } from 'react';
import {Link} from 'react-router-dom';

import Button from "components/auth/signin/Button";
import Container from "components/auth/signin/Container";
import Input from "components/auth/signin/Input";
import Navigation from "components/auth/signin/Navigation";
import Title from "components/auth/signin/Title";


import {IUser} from 'lib/interfaces/auth';
import { signInUser } from 'controllers/auth';

export const SignIn = () => {

  const [id, setId] = useState<IUser>({
    error : false,
    value : '',
    active: false
  });

  const [pwd, setPwd] = useState<IUser>({
    error : false,
    value : '',
    active: false
  });

  const signIn = () => {
    const res = signInUser(id.value, pwd.value);
    console.log(res);
  }
  return (
    <Container>
      <Title>
        로그인 한번으로<br />
        다양한 업체정보를 받아보세요.
      </Title>
      <Input type="text" placeholder="아이디 입력" onChange={(e:any) => setId({...id, value:e.target.value})}/>
      <Input type="password" placeholder="비밀번호 입력" onChange={(e:any) => setPwd({...pwd, value:e.target.value})} />
      <Button onClick={() => signIn()}>로그인</Button>
      <Navigation>
        <li>아이디찾기</li>
        <li>비밀번호 찾기</li>
        <li><Link to="/signup">회원가입</Link></li>
      </Navigation>
    </Container>
  )
}

export default SignIn;