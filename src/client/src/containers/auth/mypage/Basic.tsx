import Button from "components/auth/mypage/basic/Button";
import ButtonContainer from "components/auth/mypage/basic/ButtonContainer";
import Input from "components/auth/mypage/basic/Input";
import Part from "components/auth/mypage/basic/Part";
import TextArea from "components/auth/mypage/basic/TextArea";
import { updateUserInformation } from "controllers/auth";
import { useState } from "react";

const Basic = () => {
  const [name, setName] = useState<IData>({
    value: ''
  });

  const [interest, setInterest] = useState<IData>({
    value: ''
  });

  const [introduce, setIntroduce] = useState<IData>({
    value: ''
  });

  const onSubmit = () => {
    updateUserInformation(name.value, interest.value, introduce.value);
  }

  return (
    <>
      <Part>
        이름
      </Part>
      <Input type="text" height={42} placeholder="직접 입력하기" onChange={(e) => setName({value:e.target.value})}/>
      <Part>
        관심분야
      </Part>
      <Input type="text" height={42} placeholder="직접 입력하기" onChange={(e) => setInterest({value:e.target.value})}/>
      <Part>
        자기소개
      </Part>
      <TextArea placeholder="직접 입력하기" onChange={(e) => setIntroduce({value:e.target.value})}/>
      <ButtonContainer>
        <Button onClick={() => onSubmit()}>수정하기</Button>
      </ButtonContainer>
    </>
  )
}

interface IData {
  value : string;
}

export default Basic;