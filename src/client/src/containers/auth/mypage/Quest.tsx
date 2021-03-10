import BtnContainer from "components/auth/mypage/quest/BtnContainer";
import Button from "components/auth/mypage/quest/Button";
import FileUploadBtn from "components/auth/mypage/quest/FileUploadBtn";
import Line from "components/auth/mypage/quest/Line";
import Part from "components/auth/mypage/quest/Part"
import TextArea from "components/auth/mypage/quest/TextArea";
import { useState } from "react";

const Quest = () => {
  const [open, setOpen] = useState<IQuest>({
    question : true,
    questionList : false,
  })

  const [file, setFile] = useState<any|any[]>(null);

  const onChange = (e:any) => {
    if(e.target.files.length > 3) {
      alert("파일은 최대 3개까지만 업로드 가능합니다.");
      e.preventDefault();
    }
    else {
      setFile(e.target.files);
    }
  }

  const onSubmit = async() => {
    const formData = new FormData();
    formData.append('file', file);
  }

  return (
    <>
      <Part open={open.question} onClick={() => setOpen({question:true, questionList: false})}>
        문의하기
      </Part>
      <Line />
      <Part open={open.questionList} onClick={() => setOpen({question:false, questionList: true})}>
        문의내역
      </Part>
      {
        open.question ? (
          <>
          <TextArea placeholder="파일은 최대 3개까지 업로드 가능합니다." />
          <BtnContainer>
            <FileUploadBtn  onChange={onChange} accept="image/png, image/jpeg, image/jpg, application/pdf" type="file" id="file" multiple={true} max-length="3"/>
            <Button>
              <label htmlFor="file">파일첨부</label>
            </Button>
            <Button onClick={() => onSubmit()}>글 올리기</Button>
          </BtnContainer>
        </>
        ) : (
          <div>서비스 준비 중 입니다.</div>
        )
      }
    </>
  )
}

interface IQuest {
  question : boolean;
  questionList : boolean;
}

export default Quest;