function UnitToggleButtons() {
	const units = [
		{ value: 'metric', label: '°C' },
		{ value: 'imperial', label: '°F' },
	];

	const currentUnit = 'metric'; //To add dynamic units here

	return (
		<div className="border border-gray-100 shadow-sm rounded-sm p-1 flex gap-1 bg-gray-0">
			{units.map((unit) => (
				<button
					className={`${
						currentUnit === unit.value
							? 'bg-indigo-600 text-indigo-50'
							: 'bg-gray-100'
					} border-none rounded-sm font-medium text-xs px-2 py-1 transition-all duration-300 ${
						currentUnit === unit.value
							? 'hover:bg-indigo-600'
							: 'hover:bg-indigo-600 hover:text-indigo-50'
					}`}
					disabled={currentUnit === unit.value}
					key={unit.value}
				>
					{unit.label}
				</button>
			))}
		</div>
	);
}
export default UnitToggleButtons;
