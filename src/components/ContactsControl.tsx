import { ChangeEvent, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useActions } from 'core/hooks/useActions';
import { emptyContact } from 'core/types/contact';
import { useTypedSelector } from 'core/hooks/useTypeSelector';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EditContact from './EditContact';

export default function ContactsControl() {
	const [filter, setFilter] = useState<string>('');
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const { user } = useTypedSelector(state => state.user);
	const { logoutUser, setContactsFilter } = useActions();

	const onOpen = useCallback(() => setOpenDialog(true), []);

	const onClose = useCallback(() => setOpenDialog(false), []);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
		setContactsFilter(event.target.value);
	};

	return (
		<Stack direction='column'>
			<Stack direction='row' justifyContent='space-between'>
				{user && <Typography variant='h6'>{user.username}</Typography>}
				<IconButton
					aria-label='logout'
					component={NavLink}
					to='/login'
					onClick={logoutUser}
				>
					<LogoutIcon />
				</IconButton>
			</Stack>
			<Stack direction='row' justifyContent='space-between'>
				<Typography variant='h5'>Contacts:</Typography>
				<IconButton aria-label='add contact' onClick={onOpen}>
					<PersonAddAlt1Icon />
				</IconButton>

				<EditContact
					contact={emptyContact}
					open={openDialog}
					onClose={onClose}
				/>
			</Stack>

			<TextField
				value={filter}
				onChange={onChange}
				placeholder='Search...'
				fullWidth
			/>
		</Stack>
	);
}
