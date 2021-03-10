import { useRef, useState } from "react";
import {debounce} from 'throttle-debounce';

import Button from "components/auth/signin/Button";
import Container from "components/auth/signin/Container";
import Input from "components/auth/signin/Input";
import Title from "components/auth/signin/Title";

import {ICheck, IUser} from 'lib/interfaces/auth';
import CheckContainer from "components/auth/signup/CheckContainer";
import PromiseList from "components/auth/signup/PromiseList";
import CheckBox from "components/auth/signup/CheckBox";
import CheckLabel from "components/auth/signup/CheckLabel";
import Navgation from "components/auth/signup/Navgation";

import { validationIdCheck, validationPwdCheck } from "lib/utils/authCheck";
import WhiteSpace from "components/auth/signup/WhiteSpace";
import { signUpUser } from "controllers/auth";

export const SignUp = () => {

  const [id, setId] = useState<IUser>({
    error : false,
    value : '',
    active : false
  });

  const [pwd, setPwd] = useState<IUser>({
    error : false,
    value : '',
    active : false
  });

  const [configPwd, setConfigPwd] = useState<IUser>({
    error : false,
    value : '',
    active : false
  })

  const [check, setCheck] = useState<ICheck>({
    box1 : false,
    box2 : false,
    box3 : false,
    all : false
  })

  const idRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  
  const idCheck = (e:any) => {
    let res;
    if(e.target.value > 3) {
      res = validationIdCheck(e.target.value);
      setId({
        ...id, 
        error : res,
        value : e.target.value
      });
    }
  }

  const pwdCheck = (e:any) => {
    let res;
    if(e.target.value > 7) {
      res = validationPwdCheck(e.target.value);
      setPwd({
        ...pwd, 
        error : res,
        value : e.target.value
      });
    }
  }

  const configPwdCheck = (e:any) => {
    if(e.target.value > 7) {
      if(e.target.value === pwd.value) setPwd({...pwd, error : true});
      else return ;
    }
  }

  const allCheck = () => {
    setCheck({
      box1 : !check.all,
      box2 : !check.all,
      box3 : !check.all,
      all : !check.all
    });
  }
  
  const submitSignUp = () => {
    if(id.error && pwd.error && check.box1 && check.box2) {
      signUpUser(id.value, pwd.value, check.box3);
      console.log("가입 끝");
    } else {
      alert("아이디나 비밀번호를 확인해주세요.");
      if(!id.error) {
        idRef.current && idRef.current.focus();
        return ;
      }
      if(!pwd.error) {
        pwdRef.current && pwdRef.current.focus();
        return ;
      }
    }
  }

  return (
    <Container>
      <Title>
        회원가입을 통해 3355LAB으로<br />
        더 많은 서비스를 경험해보세요.
      </Title>
      <Navgation>
        아이디
      </Navgation>
      <Input type="text"
              placeholder="아이디 입력 ( 4자 이상 20자 제한 )"
              onChange={() => idCheck}
              ref={idRef}
              max-length="20"
      />
      <WhiteSpace />
      <Navgation>
        비밀번호
      </Navgation>
      <Input type="password"
              placeholder="비밀번호 ( 영문, 숫자, 특수문자 포함 8자 이상 )"
              onChange={() => pwdCheck}
              ref={pwdRef}
              max-length="20"
      />
      <Input type="password"
              placeholder="비밀번호확인"
              onChange={(e) => configPwdCheck(e)}
      />
      <CheckContainer onClick={() => allCheck()}>
        전체 동의하기
      </CheckContainer>
      <PromiseList>
        <CheckBox id="agree1" type="checkbox" checked={check.box1} onChange={() => setCheck({...check, box1 : !check.box1})} />
        <CheckLabel onClick={() => setCheck({...check, box1: !check.box1})}>
          (필수) 이용약관 동의하기
        </CheckLabel>
      </PromiseList>
      <PromiseList>
      <CheckBox id="agree2" type="checkbox" checked={check.box2} onChange={() => setCheck({...check, box2 : !check.box2})} />
        <CheckLabel onClick={() => setCheck({...check, box2: !check.box2})}>
          (필수) 개인정보 처리방침 동의하기
        </CheckLabel>
      </PromiseList>
      <PromiseList>
        <CheckBox id="agree3" type="checkbox" checked={check.box3} onChange={() => setCheck({...check, box3 : !check.box3})} />
        <CheckLabel onClick={() => setCheck({...check, box3: !check.box3})}>
          (선택) 제3자 정보제공 동의하기
        </CheckLabel>
      </PromiseList>
      <Button onClick={() => submitSignUp()}>가입완료</Button>
    </Container>
  )
};

export default SignUp;