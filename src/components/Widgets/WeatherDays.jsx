import WeatherDay from '../WeatherDay';

function WeatherDays() {
	return (
		<>
			<h2 className="font-bold">7 days Forecast</h2>
			<div className="bg-white flex flex-col gap-2 shadow-sm rounded-lg">
				<div className="grid grid-rows-5 gap-1 overflow-hidden">
					<WeatherDay />
					<WeatherDay />
					<WeatherDay />
					<WeatherDay />
					<WeatherDay />
				</div>
			</div>
		</>
	);
}
export default WeatherDays;
