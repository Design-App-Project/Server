import Container from "components/common/contract/Container"
import Content from "components/common/contract/Content";
import Guide from "components/common/contract/Guide";
import Highlight from "components/common/contract/Highlight";

import { useEffect, useRef } from "react";

const Contract = ({show, onClick}:IContract) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = (e:any) => {
    if(!ref.current) return ;

    if(!e.path.includes(ref.current)) {
      onClick();
    }
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
        <Highlight>전자계약은 서비스 준비 중입니다.</Highlight>
        <Guide>계약관련 문의사항은 문의하기를 통해 남겨주세요.</Guide>
      </Content>
    </Container>
  )
}

interface IContract {
  show : boolean;
  onClick : () => void;
}

export default Contract