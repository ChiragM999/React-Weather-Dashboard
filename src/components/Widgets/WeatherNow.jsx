import { HiArrowUp, HiArrowDown } from 'react-icons/hi2';

function WeatherNow() {
	// Node, ADD Dynamic Color to this parent if possible based on weather conditions

	return (
		<div className="bg-gradient-to-br from-sky-500 to-indigo-500 min-h-44 border border-gray-100 rounded-lg px-4 py-8 shadow-sm text-white">
			{/* Info about city & local time */}
			<div className="flex gap-1 flex-col text-center">
				<p className="text-xl">Dehradun, IN</p>
				<p className="text-sm">Local Time: 7:24 PM</p>
			</div>

			<div className="grid grid-cols-8 items-center py-4">
				<div className="col-span-3 flex flex-col items-center justify-center">
					<img
						className="w-24 h-24"
						src="https://openweathermap.org/img/wn/10d@2x.png"
						alt=""
					/>
					<p className="-mt-4">Sunny</p>
				</div>

				<div className="col-span-5 flex flex-col gap-4 mt-6 items-center justify-center">
					<p className="text-4xl tracking-wide">
						<span className="font-bold">28</span>°C
					</p>

					<div className="flex gap-4">
						<p className="flex items-center justify-center gap-1">
							<HiArrowUp /> 33°C
						</p>
						<p className="flex items-center justify-center gap-1">
							<HiArrowDown /> 22°C
						</p>
					</div>
				</div>

				{/* <p className="w-20">☀️</p> */}
			</div>
		</div>
	);
}
export default WeatherNow;
