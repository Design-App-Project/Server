import styled from 'styled-components';

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  max-height: 1080px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 5;
`;

export default Container;