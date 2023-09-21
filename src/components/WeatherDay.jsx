import { HiArrowDown, HiArrowUp } from 'react-icons/hi2';

function WeatherDay() {
	return (
		<div className="flex items-center justify-between p-2">
			<img
				className="w-12 h-12"
				src="https://openweathermap.org/img/wn/10d@2x.png"
				alt=""
			/>
			<p className="text-sm">Sunny</p>

			<p className="text-lg tracking-wide">
				<span className="font-semibold">28</span>°C
			</p>

			<div className="text-xs flex flex-col gap-1">
				<p className="flex items-center justify-center gap-1">
					<HiArrowUp /> 33°C
				</p>
				<p className="flex items-center justify-center gap-1">
					<HiArrowDown /> 22°C
				</p>
			</div>

			<p className="text-md ">19 Sep</p>
		</div>
	);
}
export default WeatherDay;
