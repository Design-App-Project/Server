import Button from "components/admin/modal/Button";
import Container from "components/admin/modal/Container";
import Content from "components/admin/modal/Content";
import Input from "components/admin/modal/Input";
import Title from "components/admin/modal/Title";
import { useEffect, useRef, useState } from "react";

const Add = ({show, onClick}:IAdd) => {

  const ref = useRef<HTMLDivElement>(null);

  // 회사명
  const [name, setName] = useState<string>("");
  // 회사주소
  const [address, setAddress] = useState<string>("");
  // 카테고리
  const [category, setCategory] = useState<string>("");
  // 오픈시간
  const [open, setOpen] = useState<IOpen>({
    day: "",
    night: ""
  });
  // 태그
  const [tag, setTag] = useState<string>("");
  
  const onMouseDown = (e:any) => {
    if(!ref.current) return ;

    if(!e.path.includes(ref.current)) {
      onClick();
    }
  }

  const onSubmit = () => {

  }

  useEffect(() => {
    if(show) {
      window.addEventListener('mousedown', onMouseDown, true);
    }
    return () => {
      window.removeEventListener("mousedown", onMouseDown, true);
    }
  },[show]);

  return (
    <Container>  
      <Content ref={ref}>
        <Title>회사명</Title>
        <Input placeholder="회사명을 입력해주세요." />
        <Title>업체주소</Title>
        <Input placeholder="회사주소를 입력해주세요." />
        <Title>카테고리</Title>
        <Input placeholder="카테고리를 입력해주세요." />
        <Title>오픈시간</Title>
        <Input placeholder="평일 오픈 시간을 입력해주세요." />
        <Input placeholder="주말 오픈 시간 입력해주세요." />
        <Title>태그</Title>
        <Input placeholder="태그를 입력해주세요." />
        <Title>업체 상호 이미지</Title>
        <Input placeholder="임시" />
        <Title>업체 샘플 이미지</Title>
        <Input placeholder="임시" />
        <Button>저&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</Button>
      </Content>
    </Container>
  )
}

interface IAdd {
  show: boolean;
  onClick: () => void;
}

interface IOpen {
  day: string;
  night: string;
}

export default Add;