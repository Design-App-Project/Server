import { ReactNode } from "react";

export interface IProp {
  children : ReactNode;
}

export interface IUserState {
  id : string;
  pwd : string;
  isUser : boolean;
  bookmark : string[]
}

const userState:IUserState = {
  id : '',
  pwd : '',
  isUser : false,
  bookmark : [],
}

export default userState;