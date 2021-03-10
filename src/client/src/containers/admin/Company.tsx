import Button from "components/admin/Button";
import Title from "components/admin/Title";
import { useState } from "react";
import Add from "./modal/Add";
import Delete from "./modal/Delete";

const Company = () => {

  const [open, setOpen] = useState<IOpen>({
    add: false,
    delete: false
  })

  const deleteCompany = () => {

  }

  const addCompany = () => {

  }

  return (
    <>
      <Title>업체관리</Title>
      <Button onClick={() => setOpen({...open, add:true})}>추가</Button>
      <Button onClick={() => setOpen({...open, delete:true})}>삭제</Button>
      {
        open.add && <Add show={open.add} onClick={() => setOpen({...open, add:false})}/>
      }
      {
        open.delete && <Delete />
      }
    </>
  )
}

interface IOpen {
  add: boolean;
  delete: boolean;
}

export default Company;