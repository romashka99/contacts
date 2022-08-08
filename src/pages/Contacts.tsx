import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IContact } from 'core/models/contact';
import { getContacts } from 'core/services/contact.service';
import { useTypedSelector } from 'core/hooks/useTypeSelector';
import { useActions } from 'core/hooks/useActions';

import Contact from 'components/Contact';

interface IData {
	contacts: IContact[];
	loading: boolean;
	error: string | null;
}

const initialData: IData = {
	contacts: [],
	loading: false,
	error: null,
};

export default function Contacts() {
	const { user } = useTypedSelector(state => state.user);
	const [{ contacts, loading, error }, setData] = useState<IData>(initialData);
	const { logoutUser } = useActions();
	const history = useNavigate();

	const setAllData = async () => {
		setData(prevState => ({ ...prevState, loading: true }));
		await getContacts()
			.then(response => {
				setData(prevState => ({
					...prevState,
					loading: false,
					contacts: response as IContact[],
				}));
			})
			.catch(error => {
				setData(prevState => ({
					...prevState,
					loading: false,
					error: error.message,
				}));
			});
	};

	useEffect(() => {
		user ? setAllData() : history('/login');
	}, []);

	useEffect(() => {
		if (!user) {
			history('/login');
		}
	}, [user]);

	if (user && loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<>
			<Link to='/login' onClick={logoutUser}>
				Logout
			</Link>
			<ul>
				{contacts.map(contact => (
					<li key={contact.id}>
						<Contact {...contact} />
					</li>
				))}
			</ul>
		</>
	);
}
