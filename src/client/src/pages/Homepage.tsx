import React, { useState } from 'react';
// components
import Banner from 'components/common/Banner';
import Container from 'components/common/Container';
import Nav from 'components/common/NavWrapper';
import NavSpan from 'components/common/NavSpan';

// containers
import Material from 'containers/material/Material';
import Manufacture from 'containers/manufacture/Manufacture';
import NavContainer from 'components/common/NavContainer';

const Homepage = () => {
  const [open, setOpen] = useState<IOpen>({
    material : true,
    manufacture : false
  });

  return (
    <>
      <Banner>
        How to use 'JeJak Map'
      </Banner>
      <NavContainer>
      <Nav>
        <NavSpan open={open.material} onClick={() => setOpen({manufacture : false, material : true})}>재료업체</NavSpan>
        <NavSpan open={open.manufacture} onClick={() => alert("서비스 준비 중 입니다.")}>가공업체</NavSpan>
      </Nav>
      </NavContainer>
      <Container>
        {
          open.material ? <Material /> : <Manufacture />
        }
      </Container>
    </>
  )
}

interface IOpen {
  material : boolean;
  manufacture : boolean;
}

export default Homepage;
