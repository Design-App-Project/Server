import styled from 'styled-components';

export const Container = styled.div`
  position : absolute;
  width : 100%;
  height : 100%;
  top : 0;
  left : 0;
  z-index : 15;
  &::before {
    content : '';
    width : 100%;
    height : 100%;
    background : rgba(0,0,0,0.7);
    position : absolute;
    top : 0;
    left : 0;
  }
`;

export default Container;