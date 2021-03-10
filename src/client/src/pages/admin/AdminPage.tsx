import { Helmet } from "react-helmet"
import Container from 'containers/admin/Admin';

const AdminPage = () => {

  return (
    <>
      <Helmet>
        <title>관리자페이지</title>
      </Helmet>
      <Container />
    </>
  )
}

export default AdminPage