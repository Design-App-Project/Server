import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
// containers
import Filter from 'containers/common/Filter';

// components
import Container from 'components/company/Container';
import { getAllData, getFilteredData } from 'controllers/filter';
import Result from 'containers/material/Result';

const Material = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>([]);

  const [result, setResult] = useState<any | any[]>([]);
  const [item, setItem] = useState<any | any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMoreData = async() => {
    setIsLoading(true);
    setResult(result.concat(item.slice(0,20)));
    setItem(item.slice(20));
    setIsLoading(false);
  }

  const _infiniteScroll = useCallback(() => {

    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;
    scrollHeight-=100;
    if(scrollTop + clientHeight >= scrollHeight && isLoading === false) {  
      fetchMoreData();
    }
  },[isLoading]);


  const getFetchData = async() => {
    let response;
    response = await getAllData();
    setResult(response.slice(0,20));
    response = response.slice(20);
    setItem(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  // 필터 오픈 여부
  const onToggle = () => {
    setOpen(!open);
  }

  // 필터 항목 체크여부
  const onCheck = async(name:string[]) => {
    let temp;
    let res;

    setValue(name);
    setOpen(false);
    res = await getFilteredData(name);
    setIsLoading(true);
    setResult(res.slice(0,20));
    temp = res.slice(20);
    setItem(temp);
    setIsLoading(false);
  }


  return (
    <>
      <Helmet>
        <title>3355LAB</title>
      </Helmet>
      <Filter open={open} 
              onClick={onToggle}
              setValue={onCheck}
      />
      <Container>
      {
        isLoading 
          ? <div> is Loading ... </div>
          : <Result result={result} />
      }
      </Container>
    </>
  )
}

export default Material;