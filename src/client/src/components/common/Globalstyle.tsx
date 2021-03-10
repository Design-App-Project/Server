import styled, {createGlobalStyle} from 'styled-components';
import reset from "styled-reset";

const Globalstyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing : border-box;
  }
  body {
    padding :0;
    margin :0;
    font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration : none;
    color : white;
  }
`;
export default Globalstyle;