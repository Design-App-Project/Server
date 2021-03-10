import React, { useState } from 'react';

// components
import Title from 'components/filter/Title';
import Container from 'components/filter/Container';
import Filtering from 'components/filter/Filtering';
import Selected from 'components/filter/Selected';
import List from 'components/filter/List';
import OpenFilter from 'components/filter/OpenFilter';
import Initialize from 'components/filter/Initialize';
import Search from 'components/filter/Search';

// data
import { categoryList, subdivisionList } from 'modules/states/Filter';
import Item from 'components/filter/Item';


const Filter = ({open, onClick, setValue}:IFilter) => {
  const [list, setList] = useState<string[]>([]);
  const dupArr:string[] = [];

  const onListUp = (data:string) => {
      dupArr.push(data);
      dupArr.forEach((element) => {
        if (!list.includes(element)) {
          setList([...list, data]);
        }
      });
  }
  
  return (
  <>
    <Container>
      <Title>재료 검색</Title>
      <Selected>
        {
          list.map((data, index) => 
            <>#{data}</>
          )
        }
      </Selected>
      <Search setValue={setValue} list={list} />
      <Initialize onClick={() => setList([])}>
        검색초기화
      </Initialize>
      { open && 
        <Filtering> 
          {
            categoryList.map((data, idx) => 
              <List>
                <Item key={data.length}>{data}</Item>
                {
                  subdivisionList[idx].map( res => 
                      <Item key={res.toString()}
                            onClick={() => onListUp(res)}>
                        {res}
                      </Item>
                    )
                }
              </List>
            )
          }
        </Filtering>
      }
        <OpenFilter onClick={onClick} />
    </Container>
 </>
  )
}

interface IFilter {
  open : boolean;
  onClick : () => void;
  value ?: string[];
  setValue : (name:string[]) => void;
}

export default Filter;