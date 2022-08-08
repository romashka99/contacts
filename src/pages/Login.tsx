import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedSelector } from 'core/hooks/useTypeSelector';
import { useActions } from 'core/hooks/useActions';

interface IData {
	login: string;
	password: string;
}

const initialData: IData = {
	login: '',
	password: '',
};

export default function Login() {
	const { user, loading, error } = useTypedSelector(state => state.user);
	const [{ login, password }, setData] = useState<IData>(initialData);
	const { loginUser } = useActions();
	const history = useNavigate();

	const setInputData = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const onClick = useCallback(() => {
		if (!loading) {
			loginUser(login, password);
		}
	}, [loading, login, password]);

	useEffect(() => {
		if (user) {
			history('/');
		}
	}, []);

	useEffect(() => {
		if (user) {
			history('/');
		}
	}, [user]);

	return (
		<>
			<input type='text' value={login} name='login' onChange={setInputData} />
			<input
				type='password'
				value={password}
				name='password'
				onChange={setInputData}
			/>
			{error && <p>{error}</p>}
			<button onClick={onClick}>{loading ? 'Loading...' : 'Login'}</button>
		</>
	);
}
