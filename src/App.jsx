import MainGrid from './components/MainGrid';
import Header from './components/Header';

function App() {

	return (
		<div className="grid h-screen grid-rows-[auto_1fr] bg-gray-50 text-gray-700">
			<Header />

			<main className="overflow-scroll px-4 py-8 ">
				<MainGrid />
			</main>
		</div>
	);
}
export default App;
