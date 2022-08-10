import { useState, ChangeEvent, useEffect } from 'react';

import { IContact } from 'core/models/contact';
import { useActions } from 'core/hooks/useActions';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IEditContactProps {
	contact: IContact;
	open: boolean;
	onClose: () => void;
}

export default function EditContact({
	contact,
	open,
	onClose,
}: IEditContactProps) {
	const [dataContact, setDataContact] = useState<IContact>({ ...contact });
	const { updateOrAddContact } = useActions();

	useEffect(() => {
		setDataContact({ ...contact });
	}, [contact]);

	const updateDataContact = () => {
		updateOrAddContact(dataContact);
		setDataContact({ ...contact });
		onClose();
	};

	const setInputData = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataContact(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>
				{dataContact.id ? 'Update' : 'Add'} contact
			</DialogTitle>
			<DialogContent>
				<Stack spacing={2} style={{ marginTop: 10 }}>
					<TextField
						value={dataContact.name}
						name='name'
						onChange={setInputData}
						label='Name'
						fullWidth
						required
					/>
					<TextField
						type='tel'
						value={dataContact.phone}
						name='phone'
						onChange={setInputData}
						label='Phone'
						fullWidth
						required
					></TextField>
				</Stack>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button onClick={updateDataContact} autoFocus>
					{dataContact.id ? 'Update' : 'Add'}
				</Button>
			</DialogActions>
		</Dialog>
	);
}
