import { useWeather } from '../context/WeatherContext';
import { getFormattedUnits } from '../utils/helpers';

function FormattedTemperature({ temp }) {
	const { units } = useWeather();

	return (
		<>
			<span className="font-bold">{Math.round(temp)}</span>
			{getFormattedUnits(units)}
		</>
	);
}
export default FormattedTemperature;
