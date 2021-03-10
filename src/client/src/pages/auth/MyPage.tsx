import Container from 'containers/auth/mypage/MyPage';
import {Helmet} from 'react-helmet';

const MyPage = () => {

  return (
    <>
      <Helmet>
        <title>3355lab - 마이페이지</title>
      </Helmet>
      <Container />
    </>
  )
}

export default MyPage;