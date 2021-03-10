import Card from "components/company/Card";
import Information from "components/company/Information";
import Title from "components/company/Title";
import CompanyModal from "containers/common/CompanyModal";
import { useState } from "react";

const Result = (result: any|any[]) => {
  const [open, setOpen] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const onClick = () => {
    setOpen(false);
  }

  return (
  <>
    {
      result.result.map((data:any, idx:number) => (        
        <Card key={data.id} 
              onClick={() => {
                setOpen(true);
                setNum(idx);
        }}>
          <Title>{data.title}</Title>
          <Information>{data.address}</Information>
          <Information>{data.telephone}</Information>
          <Information>{data.open[0]}</Information>
          <Information>{data.tag.slice(0,4).map((res:any, idx:number) => (<span key={idx}> #{res}</span>))}</Information>
        </Card>
      ))
    }
    {
      open && <CompanyModal result={result.result[num]} open={open} onClick={onClick}/>
    }
  </>
  )
}

export default Result;