import { combineReducers } from 'redux';
import { contactReducer } from './contacts.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
	user: userReducer,
	contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
