import { useCallback, useState } from 'react';

import { IContact } from 'core/models/contact';
import { useActions } from 'core/hooks/useActions';

import EditContact from './EditContact';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function Contact(contact: IContact) {
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const { removeContact } = useActions();

	const onOpen = useCallback(() => setOpenDialog(true), []);

	const onClose = useCallback(() => {
		setOpenDialog(false);
	}, []);

	return (
		<>
			<ListItem
				secondaryAction={
					<>
						<IconButton aria-label='edit contact' onClick={onOpen}>
							<EditIcon />
						</IconButton>
						<IconButton
							aria-label='remove contact'
							onClick={() => removeContact(contact.id)}
						>
							<PersonRemoveIcon />
						</IconButton>
					</>
				}
			>
				<ListItemAvatar>
					<Avatar>
						<PersonIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary={contact.name} secondary={contact.phone} />
			</ListItem>
			<EditContact contact={contact} open={openDialog} onClose={onClose} />
		</>
	);
}
