import { IContact } from 'core/models/contact';

export default function Contact({ name, phone }: IContact) {
	return (
		<>
			<p>{name}</p>
			<p>{phone}</p>
		</>
	);
}
