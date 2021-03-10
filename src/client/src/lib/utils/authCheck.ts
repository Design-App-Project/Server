export const emptyChecker = (keyword: string): boolean => {
	if(keyword === '' || ~keyword.indexOf(' ')) {
		return false;
	}
	return true;
}

export const validationIdCheck = (id:string) => {
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
  
  if(regExp.test(id)) {
    return true;
  } else {
    return false;
  }
}

export const validationPwdCheck = (pwd:string) => {
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&\s])[A-Za-z\d$@$!%*#?&\s]{3,}$/;

  if(regExp.test(pwd)) {
    return true;
  } else {
    return false;
  }
}