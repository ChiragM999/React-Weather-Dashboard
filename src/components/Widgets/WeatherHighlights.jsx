import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import WeatherHighlight from '../WeatherHighlight';
import { FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import { PiWavesLight } from 'react-icons/pi';
import { LiaTemperatureLowSolid } from 'react-icons/lia';
import { useWeather } from '../../context/WeatherContext';
import { formatTime, getFormattedUnits } from '../../utils/helpers';

function WeatherHighlights() {
	// Future Plan: Can map over the items and set their values dynamically using an object, rather than doing it statically.
	const { units, city, weatherData } = useWeather();

	return (
		<div className="row-start-2 col-start-1">
			<h2 className="font-bold mb-2">Today&apos;s Highlights</h2>
			<div className="grid grid-cols-2 gap-4">
				<WeatherHighlight
					icon={<HiOutlineSun />}
					title={'Sunrise'}
					value={formatTime(weatherData.sunrise, city.timezone)}
				/>

				<WeatherHighlight
					icon={<HiOutlineMoon />}
					title={'Sunset'}
					value={formatTime(weatherData.sunset, city.timezone)}
				/>

				<WeatherHighlight icon={<FiWind />} title={'Wind'} value={'12 Kmph'} />

				<WeatherHighlight
					icon={<WiHumidity />}
					title={'Humidity'}
					value={`${weatherData.humidity} %`}
				/>

				<WeatherHighlight
					icon={<LiaTemperatureLowSolid />}
					title={'Feels Like'}
					value={`${Math.round(weatherData.feelsLike)} ${getFormattedUnits(
						units
					)}`}
				/>

				<WeatherHighlight
					icon={<PiWavesLight />}
					title={'Pressure'}
					value={`${weatherData.pressure} hPa`}
				/>
			</div>
		</div>
	);
}
export default WeatherHighlights;
