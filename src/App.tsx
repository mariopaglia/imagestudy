import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ImagesProvider } from './contexts/ImagesContext';

function App() {
	return (
		<ImagesProvider>
			<Header />
			<Main />
			<Footer />
		</ImagesProvider>
	);
}

export default App;
