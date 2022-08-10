import { useTypedSelector } from 'core/hooks/useTypeSelector';

import Contact from 'components/Contact';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export default function ListContact() {
	const { contacts } = useTypedSelector(state => state.contact);

	return (
		<>
			{contacts.length ? (
				<List sx={{ width: '100%' }}>
					{contacts.map(contact => (
						<Contact key={contact.id} {...contact} />
					))}
				</List>
			) : (
				<Typography variant='body1' align='center'>
					Empty
				</Typography>
			)}
		</>
	);
}
