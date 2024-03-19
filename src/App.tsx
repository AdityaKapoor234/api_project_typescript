import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './ui/style/component.scss';
import ProductsPage from './ui/pages/ProductsPage.js';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ProductsPage />
			</QueryClientProvider>
		</>
	);
}

export default App;
