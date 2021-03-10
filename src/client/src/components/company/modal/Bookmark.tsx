import styled from 'styled-components';

const Bookmark = ({set, onClick}:IBook) => {
  const href = set ? 'images/icons/Label.png' : 'images/icons/Label_before.png';
  return <Img src={href} alt="북마크" onClick={onClick}/>
}

const Img = styled.img`
  width: 12px;
  height: 24px;
  position: absolute;
  right: 30px;
  cursor: pointer;
`;

interface IBook {
  set: boolean;
  onClick: () => void;
}

export default Bookmark;