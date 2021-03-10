import Button from "components/notfound/Button"
import Container from "components/notfound/Container"
import Title from "components/notfound/Title"
import Header from "containers/common/Header"
import { Link } from "react-router-dom"

const NotFound = () => {

  return (
    <>
      <Header />
      <Container>
        <Title>404 Not Found.</Title>
        <Button><Link to="/">Go Home</Link></Button>
      </Container>
    </>
  )
}

export default NotFound;