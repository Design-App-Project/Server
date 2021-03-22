import { CompanyModel,Company, ICompany } from "../models/company.model";
// import * as fs from 'fs';
import fs from "fs";

import path from "path";

export class EditTypeOfDbFiled {
  constructor() {}

  StringToArray = async () => {
    const companyModel = new CompanyModel();
    let data: ICompany = await companyModel.readAllData("");
    let datalen = Object.keys(data).length;
    for (let i = 0; i < datalen; i++) {
      let newTagList = data[i].tag[0].split(", ");
      data[i].tag = newTagList;

      let sample_imgs = [];
      data[i].sample_imgs = sample_imgs;

      let newOpenList = data[i].open[0].split(", ");
      data[i].open = newOpenList;
      data[i].likes = Number(data[i].likes);
      
      companyModel.update(data[i]);
    }
    console.log("타입 변경이 완료되었습니다.");
  };

  insertHeadImgToDB = async () =>{
    const companyModel = new CompanyModel();
    const companyList: ICompany = await companyModel.read("title");
    const datalen = Object.keys(companyList).length;

    console.log("업체 개수: ",datalen);
    
    const HEAD_PATH = path.join(__dirname,'../../../company_imgs/HEAD')
    const DETAIL_PATH = path.join(__dirname,'../../../company_imgs/HEAD')

    
    fs.readdir(HEAD_PATH,async function(err,data){ 
      console.log("간판 사진 개수:", data.length)

      for(let i in data){
        let title = data[i].split('_')[0];
        const filter = {
          title: title
        }
        const value = {
          img_path: data[i]
        }
        const company: ICompany = await Company.findOneAndUpdate(filter,value,{new:true})
        if(parseInt(i)%10==0){
          console.log(`${i}개 사진 완료`);
        }
      }
      console.log("간판 사진 삽입 완료")
    });
  }

  insertDetailImgToDB = async () =>{
    const companyModel = new CompanyModel();
    const companyList: ICompany = await companyModel.read("title");
    const datalen = Object.keys(companyList).length;

    console.log("업체 개수: ",datalen);
    
    const DETAIL_PATH = path.join(__dirname,'../../../company_imgs/DETAIL')
    const company: ICompany = await Company.find();
    const filter={title:''}

    fs.readdir(DETAIL_PATH,async function(err,data){ 
      console.log("세부 사진 개수:", data.length);
      for(let i in company){
        let tempArr:string[] = [];
        let title:string = '';

        for(let j in data){
          title = data[j].split('_')[0]
          if (company[i].title == title){
            filter.title = title
            tempArr.push(data[j]);
          }
        }
        const value = {
          sample_imgs : tempArr
        }
        await Company.findOneAndUpdate(filter,value,{new:true})
      }
      console.log("세부 사진 삽입 완료");
     });

  }
}
