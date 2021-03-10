import {produce} from 'immer';
import userState, { IProp, IUserState } from 'modules/states/user';
import * as actions from 'modules/actions/user';
import { createContext, Dispatch, useReducer } from 'react';

export const reducer = (
  state:IUserState = userState,
  action:actions.ActionType
):IUserState => {
  switch(action.type) {
    case actions.UPDATE_USER:
      return produce(state, draft => {
        if(!action.payload) return ;
        draft.id = action.payload.id;
        draft.pwd = action.payload.pwd;
        draft.isUser = action.payload.isUser;
        draft.bookmark = action.payload.bookmark;
      });

    case actions.DELETE_USER:
      return produce(state, draft => {
        draft.id = "";
        draft.pwd = "";
        draft.isUser = false;
        draft.bookmark = [];
      });

    default :
      return state; 
    } 
};

export const userContext = createContext<{
                        state: IUserState;
                        dispatch : Dispatch<actions.ActionType>;
                      }>({state:userState, dispatch:() => null});

const Provider = ({ children }:IProp) => {
  const [state, dispatch] = useReducer(reducer, userState);
  const value = { state, dispatch };

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
}

export default Provider