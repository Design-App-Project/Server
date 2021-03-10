import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// import { Helmet } from 'react-helmet';

import Filter from 'containers/common/Filter';
import Container from 'components/company/Container';
import Card from 'components/company/Card';
import Title from 'components/company/Title';
import Information from 'components/company/Information';

const Manufacture = () => {
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
    await axios.get("http://3.18.72.134:3000/api/v1/material")
                                  .then((res) => {
                                    let response = res.data.result;
                                    setResult(response.slice(0,20));
                                    response = response.slice(20);
                                    setItem(response);
                                    setIsLoading(false);
                                  })
                                  .catch(error => {
                                    return Promise.reject(error);
                                  });      
  }

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  const onToggle = () => {
    setOpen(!open);
  }

  const onCheck = (name:string[]) => {
    setValue(name);
  }

  const Result = () =>
      result.map((data:any, idx:number) => 
      <Card key={idx}>
        <Title>{data.title}</Title>
        <Information>{data.address}</Information>
        <Information>{data.telephone}</Information>
        <Information>{data.tag.slice(0,4).map((res:any)=>(<>#{res}</>))}</Information>
      </Card>
    )
  

  return (
    <>
      {/* <Helmet>
        <title>3355LAB</title>
      </Helmet> */}
      <Filter open={open} 
              onClick={onToggle}
              setValue={onCheck}
      />
      <Container>
      {
        isLoading 
          ? <Card> is Loading ... </Card>
          : <Result />
      }
      </Container>
    </>
  )
}

export default Manufacture;