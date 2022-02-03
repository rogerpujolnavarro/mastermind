// react
import { useContext } from 'react';
// components
import Hole from './Hole';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import PinContext from '../contexts/PinContext';

const TableRow = ({ row, indexRow }) => {
	const { attempt, totalAttempts, totalColumns, onChangeAttempt } = useContext(AttemptContext);
	const { targetHoles } = useContext(PinContext);

	return (
		<div key={`div-${indexRow}`} className="row-board">
			{/* answer board */}
			<ul key={`solution-${indexRow}`}>
				{row.map((id) => (
					<li key={`small-${id}`} className="small-hole"></li>
				))}
			</ul>
			{/* game board */}
			<ul key={`game-${indexRow}`}>
				{row.map((id) => (
					<Hole key={`big-${id}`} indexRow={indexRow} position={id} />
				))}
				<button
					key={`button-${indexRow}`}
					className={`${totalAttempts - attempt > indexRow ? 'invisible' : ''} ${
						targetHoles.length === attempt * totalColumns ? '' : 'disabled'
					}`}
					onClick={onChangeAttempt}
				>
					check
				</button>
			</ul>
		</div>
	);
};

export default TableRow;
