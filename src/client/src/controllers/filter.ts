import Fetch from 'controllers/fetch';

export const getFilteredData = (data:string[]) => {
  const category = data ? data : "";
  return Fetch('http://3.18.72.134:3000/api/v1/filtering','POST', category)
              .then(res => {
                return res.result;
              })
              .catch(err => {
                return Promise.reject(err);
              })
}

export const getAllData = () => {
  return Fetch('http://3.18.72.134:3000/api/v1/material','GET')
            .then(res => {
              console.log(res.result);
              return res.result;
            })
            .catch(err => {
              return Promise.reject(err);
            })
}