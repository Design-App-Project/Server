import SignUp from "containers/auth/SignUp";
import { Helmet } from "react-helmet";

export const SignUpPage = () => {

  return (
    <>
      <Helmet>
        <title>3355lab - 로그인</title>
      </Helmet>
      <SignUp />
    </>
  )
}

export default SignUpPage;