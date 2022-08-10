import { useTypedSelector } from 'core/hooks/useTypeSelector';

import ContactsControl from 'components/ContactsControl';
import ListContact from 'components/ListContact';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function Contacts() {
	const { loading } = useTypedSelector(state => state.contact);

	return (
		<>
			<ContactsControl />
			<div style={{ marginTop: 20 }}>
				{loading ? (
					<Stack direction='row' justifyContent='center'>
						<CircularProgress />
					</Stack>
				) : (
					<ListContact />
				)}
			</div>
		</>
	);
}
