import React, { useState } from "react";
import {Link} from 'react-router-dom';

// Containers
import Slidebar from "containers/common/Slidebar";
// Components
import Container from "components/common/header/Container";
import Menu from "components/common/header/Menu";
import Hamburger from "components/common/header/Hamburger";
import Logo from "components/common/header/Logo";
import Mypage from "components/common/header/Mypage";

const Header = () => {
  const [open,setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  }

  return (
    <>
      <Container>
        <Menu open={open} onClick={onToggle} >
          <Hamburger open={open} />
          <Hamburger open={open} />
          <Hamburger open={open} />
        </Menu>
        <Logo>
          <Link to="/">3355Lab</Link>
        </Logo>
        <Mypage onClick={() => window.location.href="/signin"} src="images/icons/Mypage.png" />
      </Container>
      <Slidebar open={open} onClick={onToggle} /> 
    </>
  )
}

export default Header;