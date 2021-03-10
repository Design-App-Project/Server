import Set from "components/auth/mypage/bookmark/Set";
import Container from "components/auth/mypage/bookmark/Container";
import Part from "components/auth/mypage/basic/Part";

const Bookmark = () => {
  return (
    <>
      <Part>관심업체</Part>
      <Container>
        <Set />
        <Set />
        <Set />
      </Container>
    </>
  )
}

export default Bookmark;