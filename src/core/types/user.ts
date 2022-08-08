import { IUser } from 'core/models/user';

export interface IUserState {
	user: IUser | null;
	loading: boolean;
	error: string | null;
}

export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

interface IFetchUserAction {
	type: UserActionTypes.FETCH_USER;
}

interface IFetchUserSuccessAction {
	type: UserActionTypes.FETCH_USER_SUCCESS;
	payload: IUser | null;
}

interface IFetchUserErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR;
	payload: string;
}

export type UserAction =
	| IFetchUserAction
	| IFetchUserSuccessAction
	| IFetchUserErrorAction;
