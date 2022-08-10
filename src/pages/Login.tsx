import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedSelector } from 'core/hooks/useTypeSelector';
import { useActions } from 'core/hooks/useActions';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getLoadingButtonUtilityClass } from '@mui/lab';

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

	const onClick = () => {
		if (!loading) {
			loginUser(login, password);
		}
	};

	useEffect(() => {
		if (user && !loading) {
			history('/');
		}
	}, [user]);

	return (
		<Card>
			<CardContent>
				<Stack spacing={2}>
					<TextField
						value={login}
						name='login'
						onChange={setInputData}
						label='Login'
						fullWidth
						required
					/>

					<TextField
						type='password'
						value={password}
						name='password'
						onChange={setInputData}
						label='Password'
						fullWidth
						required
					/>

					{error && (
						<Typography variant='caption' align='center' color='red'>
							{error}
						</Typography>
					)}

					<LoadingButton
						onClick={onClick}
						loading={loading}
						variant='contained'
					>
						Login
					</LoadingButton>
				</Stack>
			</CardContent>
		</Card>
	);
}
