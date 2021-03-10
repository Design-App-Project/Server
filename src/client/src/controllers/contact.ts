import Fetch from 'controllers/fetch';

export const contactUs = (text:string, file:FormData, id:string) => {
  const sendData = {
    text,
    file,
    id
  }

  return Fetch("http://3.18.72.134:3000/api/v1/contact", "POST", sendData)
      .then(res => {
        return res.success;
      })
      .catch(err => {
        return err;
      })
}