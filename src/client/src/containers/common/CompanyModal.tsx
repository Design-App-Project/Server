import Bookmark from "components/company/modal/Bookmark";
import Container from "components/company/modal/Container";
import Content from "components/company/modal/Content";
import Form from "components/company/modal/Form";
import Information from "components/company/modal/Information";
import InforTitle from "components/company/modal/InforTitle";
import MPhoto from "components/company/modal/MPhoto";
import MPhotoContainer from "components/company/modal/MPhotoContainer";
import MPhotoNav from "components/company/modal/MPhotoNav";
import Photo from "components/company/modal/Photo";
import Tag from "components/company/modal/Tag";
import Title from "components/company/modal/Title";
import Wrapper from "components/company/modal/Wrapper";
import { useEffect, useRef, useState } from "react";

const CompanyModal = ({result, open, onClick}:IModal) => {

  const ref = useRef<HTMLDivElement>(null);

  const [save, setSave] = useState<boolean>(false);

  const onMouseDown = (e:any) => {
    if(!ref.current) return ;

    if(!e.path.includes(ref.current)) {
      onClick();
    }
  };

  useEffect(() => {
    if(open) {
      window.addEventListener('mousedown', onMouseDown, true);
    }
    return () => {
      window.removeEventListener("mousedown", onMouseDown, true);
    }
  },[open]);

  return (
    <>
      <Container>
        <Content ref={ref}>
          <Title>{result.title}</Title>
          <Tag>#{result.category}</Tag>
          <Bookmark set={save} onClick={() => setSave(prev => !prev)}/>
          <Wrapper>
          <Photo src="images/test.jpeg" alt="하이" />
          <Form>
            <InforTitle>주소</InforTitle>
            <Information>{result.address}</Information>
            <InforTitle>연락처</InforTitle>
            <Information>{result.telephone}</Information>
            <InforTitle>업무시간</InforTitle>
            <Information>{result.open[0]}<br/>{result.open[1]}</Information>
            <InforTitle>재료 키워드</InforTitle>
            <Information>
              {
                result.tag.map((res:any) => (<>#{res} </>))
              }
            </Information>
          </Form>
          </Wrapper>
          <MPhotoNav>재료사진</MPhotoNav>
          <MPhotoContainer>
            <MPhoto src="images/test.jpeg" alt="하이"/>
            <MPhoto src="images/test.jpeg" alt="하이"/>
            <MPhoto src="images/test.jpeg" alt="하이"/>
          </MPhotoContainer>
        </Content>
      </Container>
    </>
  )
}

interface IModal {
  result : any;
  open : boolean;
  onClick: () => void;
}

export default CompanyModal;