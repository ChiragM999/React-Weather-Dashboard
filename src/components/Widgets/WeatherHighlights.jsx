import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import WeatherHighlight from '../WeatherHighlight';
import { FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import { PiWavesLight } from 'react-icons/pi';
import { LiaTemperatureLowSolid } from 'react-icons/lia';

function WeatherHighlights() {
	// Future Plan: Can map over the items and set their values dynamically using an object, rather than doing it statically.

	return (
		<>
			<h2 className="font-bold">Today&apos;s Highlights</h2>
			<div className="grid grid-cols-2 gap-4">
				<WeatherHighlight
					icon={<HiOutlineSun />}
					title={'Sunrise'}
					value={'6:40 AM'}
				/>

				<WeatherHighlight
					icon={<HiOutlineMoon />}
					title={'Sunset'}
					value={'6:40 PM'}
				/>

				<WeatherHighlight icon={<FiWind />} title={'Wind'} value={'12 Kmph'} />

				<WeatherHighlight
					icon={<WiHumidity />}
					title={'Humidity'}
					value={'50%'}
				/>

				<WeatherHighlight
					icon={<LiaTemperatureLowSolid />}
					title={'Feels Like'}
					value={'36°C'}
				/>

				<WeatherHighlight
					icon={<PiWavesLight />}
					title={'Pressure'}
					value={'1003 hPa'}
				/>
			</div>
		</>
	);
}
export default WeatherHighlights;
