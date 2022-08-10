import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';

export default function Layout() {
	return (
		<Container maxWidth='sm'>
			<Outlet />
		</Container>
	);
}
