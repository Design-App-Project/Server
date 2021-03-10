import styled from 'styled-components';
import color from 'lib/styles/pallettes';

const Search = ({setValue, list}:ISearch) => {
 return <Img src="images/icons/Search.png" onClick={() => setValue(list)}/>
}

const Img = styled.img`
  position : absolute;
  right : 45px;
  cursor : pointer;

  @media (max-width : 414px) {
    right : 18px;
    width : 43px;
    height : 23px;
  }
`;

interface ISearch {
  list : string[]
  setValue : (list:string[]) => void;
}

export default Search;