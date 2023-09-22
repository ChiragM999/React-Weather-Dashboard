import { useEffect, useState } from 'react';
import { HiMapPin } from 'react-icons/hi2';
import {
	getCurrentLocation,
	getLocationCoords,
} from '../services/apiGeocoding';

import { useWeather } from '../context/WeatherContext';
import { getResults } from '../services/apiWeather';

function SearchBar() {
	const [query, setQuery] = useState('');
	const { units, dispatch } = useWeather();

	async function handleSubmit(e) {
		e.preventDefault();

		const [lat, lon] = await getLocationCoords(query);

		console.log('returning value', lat, lon);
		const { resultCurrent, resultWeekly } = getResults(lat, lon, units);

		dispatch({ type: `dataReceived/current`, payload: resultCurrent });
		dispatch({ type: `dataReceived/weekly`, payload: resultWeekly });
	}

	async function handleLocationEnable() {
		const { lat, lon } = await getCurrentLocation();

		const { resultCurrent, resultWeekly } = getResults(lat, lon, units);

		dispatch({ type: `dataReceived/current`, payload: resultCurrent });
		dispatch({ type: `dataReceived/weekly`, payload: resultWeekly });
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Search location..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="w-44 rounded-full bg-slate-100 px-4 py-2 text-xs transition-all duration-300 placeholder:text-slate-400 outline-none focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
				/>
			</form>
			<button
				type="button"
				onClick={() => handleLocationEnable()}
				className="p-1 rounded-full bg-slate-100 transition-all duration-300 outline-none focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 "
			>
				<HiMapPin className="h-5 w-5 fill-slate-700" />
			</button>
		</>
	);
}
export default SearchBar;
