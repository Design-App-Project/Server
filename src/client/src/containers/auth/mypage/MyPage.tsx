import Container from "components/auth/mypage/Container";
import List from "components/auth/mypage/List";
import Navigationbar from "components/auth/mypage/Navigationbar";
import Title from "components/auth/mypage/Title";

import { useState } from "react";
import Basic from "./Basic";
import Bookmark from "./Boormark";
import Quest from "./Quest";

const MyPage = () => {
  const [current, setCurrent] = useState<ICurrent>({
    basic : true,
    matching : false,
    bookmark : false,
    quest : false
  })

  return (
    <Container>
      <Title>마이페이지</Title>
      <Navigationbar>
        <List open={current.basic} 
              onClick={() => setCurrent(prev => ({...prev, 
                                        basic : true,
                                        matching : false,
                                        bookmark : false,
                                        quest : false
                                        }))}>
              기본정보
        </List>
        <List open={current.matching} 
              onClick={() => setCurrent(prev => ({...prev, 
                                        basic : false,
                                        matching : true,
                                        bookmark : false,
                                        quest : false
                                        }))}>
              매칭관리
        </List>
        <List open={current.bookmark} 
              onMouseDown={() => setCurrent(prev => ({...prev, 
                                        basic : false,
                                        matching : false,
                                        bookmark : true,
                                        quest : false
                                        }))}>
              즐겨찾기
        </List>
        <List open={current.quest} 
              onClick={() => setCurrent(prev => ({...prev, 
                                        basic : false,
                                        matching : false,
                                        bookmark : false,
                                        quest : true,
                                        }))}>
              문의하기
        </List>
      </Navigationbar>
      {
        current.basic && <Basic />
      }
      {
        current.matching && <div>준비 중 입니다.</div>
      }
      {
        current.bookmark && <Bookmark />
      }
      {
        current.quest && <Quest />
      }
    </Container>
  )
}

interface ICurrent {
  basic : boolean;
  matching : boolean;
  bookmark : boolean;
  quest : boolean;
}

export default MyPage;