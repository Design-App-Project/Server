import {userInfo} from 'controllers/auth';
/*
	Thunks
*/
export const getUser = (dispatch: any) => {

	return userInfo()
					.then(data => {
						dispatch(updateUser(data));
					})
					.catch(err => {
						return Promise.reject(err);
					})
}

/*
	Actions Types
*/
export const UPDATE_USER= 'auth/UPDATE_USER' as const;
export const DELETE_USER = 'auth/DELETE_USER' as const;


/*
	Action Payload Types
*/


/*
	Actions Constructors
*/
export const updateUser = (data:any) => ({type: UPDATE_USER, payload : data});
export const deleteUser = () => ({type: DELETE_USER});

export type ActionType = 
	| ReturnType<typeof updateUser>
	| ReturnType<typeof deleteUser>