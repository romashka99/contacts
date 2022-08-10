import * as UserActionCreators from './user.action';
import * as ContactActionCreators from './contact.action';

export default {
	...UserActionCreators,
	...ContactActionCreators,
};
