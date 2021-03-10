import Fetch from 'controllers/fetch';

/** 회원가입
@param {id, pwd, selected} 유저 가입에 필요한 정보
@version 1
*/
export const signUpUser = (id:string, pwd:string, selected:boolean) => {
  const sendData = {
    id,
    pwd,
    selected
  }

  return Fetch('http://3.18.72.134:3000/api/v1/user/signup', 'POST', sendData)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
}

/** 유저 정보 호출 
@param { none } 유저 가입에 필요한 정보
@version 1
*/
export const userInfo = () => {
  return Fetch('http://3.18.72.134:3000/api/v1/user','GET')
      .then(res => {
        return res;
      })
      .catch(err => {
        return Promise.reject(err);
      })
}

/** 로그인
@param {id, pwd} 로그인에 필요한 정보
@version 1
*/
export const signInUser = (id:string, pwd:string) => {
  const sendData = {
    id,
    pwd
  };

  return Fetch('http://3.18.72.134:3000/api/v1/user/login','POST', sendData)
      .then(res => {
        if(res.success) {
          window.localStorage.setItem("lab-lg","true");
          return res.result;
        }
      })
      .catch(err => {
        return Promise.reject(err);
      })
}

/** 로그아웃
@param { none } 유저 가입에 필요한 정보
@version 1
*/
export const signOutUser = () => {
  window.localStorage.removeItem('lab-lg');
  return Fetch('http://3.18.72.134:3000/api/v1/user/login','GET')
      .then(res => {
        window.localStorage.removeItem('lab-lg');
        return res;
      })
      .catch(err => {
        return Promise.reject(err);
      })
}

/**
 @param { id } 아이디
 @version 1
 */
export const idDuplicateCheck = (id:string) => {
  const sendData = {
    id
  };

  return Fetch('http://3.18.72.134:3000/api/v1/user/id', 'POST', sendData)
      .then(res => {
        return res.success;
      })
      .catch(err => {
        return Promise.reject(err);
      })
}

/**
 @param {name, intrest, introduce} 이름, 관심분야, 자기소개
 @version 1
 */

export const updateUserInformation = (
  name: string,
  intrest: string,
  introduce: string
) => {
  const sendData = {
    name,
    intrest,
    introduce
  }
  return Fetch("http://3.18.72.134:3000/api/v1/user","PUT", sendData)
        .then( res => {
          return res.result;
        })
        .catch( err => {
          return Promise.reject(err);
        })
}