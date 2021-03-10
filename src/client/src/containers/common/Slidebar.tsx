// utils
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// containers
import About from 'containers/common/About';

// components
import UList from 'components/common/slidebar/SlidebarUList';
import List from 'components/common/slidebar/SlidebarList';
import Menu from 'components/common/header/Menu';
import Hamburger from 'components/common/header/Hamburger';
import Button from 'components/common/slidebar/Button';
import Whitespace from 'components/common/slidebar/Whitespace';
import Footer from 'components/common/slidebar/Footer';
import Contract from './Contract';

const Slidebar = ({open, onClick}:ISlide) => {

  const [show,setShow] = useState<IShow>({
    about: false,
    contract: false
  });
  const ref = useRef<HTMLUListElement>(null);

  const onMouseDown = (e:any) => {
    if(!ref.current) return ;

    if(!e.path.includes(ref.current)) {
      onClick();
    }
  }

  const onAbout = () => {
    setShow({
      ...show,
      about: !show.about
    });
  }

  const onContract = () => {
    setShow({
      ...show,
      contract: !show.contract
    })
  }

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
      {open ? <Bar /> : <></>}
      <UList open={open} ref={ref}>
        <Menu open={open} onClick={onClick} >
          <Hamburger open={open} />
          <Hamburger open={open} />
          <Hamburger open={open} />
        </Menu>
        <Button onClick={onClick}><Link to="/signin">로그인 및 회원가입</Link></Button>
        <Whitespace />
        <Link to="/" onClick={onClick}><List>HOME</List></Link>
        <List onClick={() => {setShow({...show, about: !show.about}); 
                              onClick();}}>
                              ABOUT US
        </List>
        <List onClick={() => {setShow({...show, contract: !show.contract}); 
                              onClick();}}>
                              CONTRACT US
        </List>
        <Footer />
      </UList>
      { show.about && <About show={show.about} onClick={onAbout}/> }
      { show.contract && <Contract show={show.contract} onClick={onContract}/>}
    </>
  )
}

const Bar = styled.div`
position : fixed;
top : 0;
left : 0;
display : none;
background-color : rgba(0, 0, 0, .5);
width : 414px;
height : 100%;
z-index : 1;
@media (max-width : 414px) {
  display : block;
}
`;

interface ISlide {
  open : boolean;
  onClick : () => void;
}

interface IShow {
  contract: boolean;
  about: boolean;
}


export default Slidebar;