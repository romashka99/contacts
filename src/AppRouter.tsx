import Layout from 'components/Layout';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export default function AppRouter() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Layout />}>
				<Route index element={<Contacts />} />
				<Route path='login' element={<Login />} />
			</Route>
		</Routes>
	);
}
