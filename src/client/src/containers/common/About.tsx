import Modal from 'components/common/about/Contact';
import ModalWrapper from 'components/common/about/Container';
import Map from 'components/common/about/Map';
import Title from 'components/common/about/Title';
import Ul from 'components/common/about/UList';
import { useEffect, useRef } from 'react';

export const About = ({show, onClick}:IAbout) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const onMouseDown = (e:any) => {
    if(!ref.current) return ;

    if(!e.path.includes(ref.current)) {
      onClick();
    }
  }

  useEffect(() => {
    if(show) {
      window.addEventListener('mousedown', onMouseDown, true);
    }
    return () => {
      window.removeEventListener("mousedown", onMouseDown, true);
    }
  },[show]);

  return (
    <ModalWrapper>
      <Modal ref={ref} >
        <Title>3355LAB</Title>
        <Ul>
          <li>주소 : 서울시 광진구 광나루로 19길 23 가온누리 209호</li>
          <li>사업자등록번호 : 373 - 31 - 01051</li>
          <li>Email : contact@3355lab.com</li>
        </Ul>
        <Map id="contactMap">
        
        </Map>
      </Modal>
    </ModalWrapper>
  )
}

interface IAbout {
  show : boolean;
  onClick : () => void;
}

export default About;