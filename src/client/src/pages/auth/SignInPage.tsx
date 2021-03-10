import SignIn from "containers/auth/SignIn";
import { Helmet } from "react-helmet";

export const SignInPage = () => {

  return (
    <>
      <Helmet>
        <title>3355lab - 로그인</title>
      </Helmet>
      <SignIn />
    </>
  )
}

export default SignInPage;