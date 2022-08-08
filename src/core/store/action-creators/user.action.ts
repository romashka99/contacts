import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from 'core/types/user';
import { login, logout } from 'core/services/auth.service';
import { IUser } from 'core/models/user';

export const loginUser = (username: string, password: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.FETCH_USER });
		login(username, password)
			.then(response => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: response as IUser,
				});
			})
			.catch(error => {
				dispatch({
					type: UserActionTypes.FETCH_USER_ERROR,
					payload: error.message,
				});
			});
	};
};

export const logoutUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.FETCH_USER });
		logout()
			.then(response => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: response as null,
				});
			})
			.catch(error => {
				dispatch({
					type: UserActionTypes.FETCH_USER_ERROR,
					payload: error.message,
				});
			});
	};
};
