import Row from './Row';
import UnitToggleButtons from './UnitToggleButtons';
import TimeAndDate from './Widgets/TimeAndDate';
import WeatherDays from './Widgets/WeatherDays';
import WeatherGraph from './Widgets/WeatherGraph';
import WeatherHighlights from './Widgets/WeatherHighlights';
import WeatherNow from './Widgets/WeatherNow';

function MainGrid() {
	return (
		<div className="mx-auto max-w-3xl grid gap-6">
			<Row>
				<TimeAndDate />
				<UnitToggleButtons />
			</Row>
			<WeatherNow />
			<WeatherHighlights />
			<WeatherDays />
			<WeatherGraph />
		</div>
	);
}
export default MainGrid;
