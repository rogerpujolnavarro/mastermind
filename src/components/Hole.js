// react
import { useContext } from 'react';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import PinContext from '../contexts/PinContext';
// defaults
import { createGradient } from '../defaults/functions';

const Hole = ({ indexRow, position }) => {
	const { attempt, totalAttempts } = useContext(AttemptContext);
	const { onChangePin, targetHoles } = useContext(PinContext);
	return (
		<li
			className={`${totalAttempts - attempt === indexRow ? '' : 'disabled'} hole`}
			style={{
				backgroundImage: targetHoles.filter((hole) => hole.position === position).length
					? createGradient(
							targetHoles.filter((hole) => hole.position === position)[0].color
					  )
					: 'none',
			}}
			onClick={() => {
				onChangePin(false, position);
			}}
		></li>
	);
};

export default Hole;
