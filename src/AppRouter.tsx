import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { useTypedSelector } from 'core/hooks/useTypeSelector';

import Layout from 'components/Layout';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
	const { user, loading } = useTypedSelector(state => state.user);

	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Layout />}>
				<Route
					index
					element={user && !loading ? <Contacts /> : <Navigate to={'login'} />}
				/>
				<Route path='login' element={<Login />} />
			</Route>
		</Routes>
	);
}
