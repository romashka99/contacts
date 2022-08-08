import AppRouter from 'AppRouter';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'core/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
