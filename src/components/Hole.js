// react
import { useContext } from 'react';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import PinContext from '../contexts/PinContext';
import SettingsContext from '../contexts/SettingsContext';
// defaults
import { colors } from '../defaults/parameters';

const Hole = ({ indexRow, position }) => {
	const { attempt, totalAttempts } = useContext(AttemptContext);
	const { onChangePin, targetHoles } = useContext(PinContext);
	const { mode } = useContext(SettingsContext);

	const activeHole = targetHoles.filter((hole) => hole.position === position).length > 0;
	const activeIndexColor = activeHole
		? colors.findIndex(
				(color) =>
					color === targetHoles.filter((hole) => hole.position === position)[0].color
		  )
		: '';
	const activeClass = activeHole ? (mode.pattern ? ' pattern' : ' color') + activeIndexColor : '';

	return (
		<li
			className={`hole${activeClass}${
				totalAttempts - attempt === indexRow ? '' : ' disabled'
			}`}
			onClick={() => {
				onChangePin(false, position);
			}}
		></li>
	);
};

export default Hole;
