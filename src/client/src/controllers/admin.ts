import Fetch from 'controllers/fetch';

/**
@param { none }
@version 1
 */

export const readQuestion = () => {
  
  return Fetch("http://3.18.72.134:3000/api/v1/question",'GET')
    .then(res => {
      return res.result;
    })
    .catch(err => {
      return Promise.reject(err);
    })
}

/**
@param { name, address, category, open, tag } 회사명, 주소, 대표카테고리, 매장오픈시간, 취급물품
@version 1
 */
export const addCompany = (
  name: string,
  address: string,
  category: string,
  open:{day:string, night:string},
  tag:string
) => {
  
  const sendData = {
    name,
    address,
    category,
    open,
    tag
  };

  return Fetch("http://3.18.72.134:3000/api/v1/company", "POST", sendData)
      .then(res => {
        return res.success;
      })
      .catch(err => {
        return Promise.reject(err);
      })
}

/**
@param { name } 회사명
@version 1
 */
export const deleteCompany = (name: string) => {
  const sendData = {
    name
  }
  return Fetch("http://3.18.72.134:3000/api/v1/company","DELETE",sendData)
    .then(res => {
      return res.success;
    })
    .catch(err => {
      return Promise.reject(err);
    })
}

/**
 @param { id } 유저 아이디
 @version 1
 */
export const dropUser = (id:string) => {
  const sendData = {
    id
  }
  return Fetch("http://3.18.72.134:3000/api/v1/user","DELETE", sendData)
    .then(res => {
      if(res.success) {
        return res.result;
      }
    })
    .catch(err => {
      return Promise.reject(err);
    })
}
