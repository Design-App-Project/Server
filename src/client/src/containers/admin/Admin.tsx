import Part from "components/admin/Part"
import Container from "components/admin/Container"
import Content from "components/admin/Content";
import { useState } from "react"
import Company from "./Company";
import Question from "./Question";
import User from "./User";

const Admin = () => {
  const [open, setOpen] = useState<IAdmin>({
    question: true,
    user: false,
    company: false
  });

  return (
    <Container>
      <Part onClick={() => setOpen({question:true, user:false, company: false})}>문의하기</Part>
      <Part onClick={() => setOpen({question:false, user:true, company: false})}>회원관리</Part>
      <Part onClick={() => setOpen({question:false, user:false, company: true})}>업체관리</Part>
      <Content>
        {
          open.question && <Question />
        }
        {
          open.user && <User />
        }
        {
          open.company && <Company />
        }
      </Content>
    </Container>
  )
}

interface IAdmin {
  question: boolean;
  user: boolean;
  company: boolean;
}

export default Admin;