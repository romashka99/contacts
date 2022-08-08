import { IUserState, UserAction, UserActionTypes } from 'core/types/user';

const initialState: IUserState = {
	user: null,
	loading: false,
	error: null,
};

export const userReducer = (
	state = initialState,
	action: UserAction
): IUserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return { loading: true, error: null, user: state.user };
		case UserActionTypes.FETCH_USER_SUCCESS:
			return { loading: false, error: null, user: action.payload };
		case UserActionTypes.FETCH_USER_ERROR:
			return { loading: false, error: action.payload, user: state.user };
		default:
			return state;
	}
};
