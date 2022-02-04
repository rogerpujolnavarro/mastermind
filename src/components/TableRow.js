// react
import { useContext, useEffect, useState } from 'react';
// components
import Hole from './Hole';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import PinContext from '../contexts/PinContext';

const TableRow = ({ indexRow, row }) => {
	const { attempt, totalAttempts, totalColumns, onChangeAttempt } = useContext(AttemptContext);
	const { answerHoles, targetHoles } = useContext(PinContext);

	const [totalOk, setTotalOk] = useState(
		answerHoles.filter((answer) => answer.attempt === totalAttempts - indexRow)
	);

	useEffect(() => {
		setTotalOk(answerHoles.filter((answer) => answer.attempt === totalAttempts - indexRow));
	}, [answerHoles, indexRow, totalAttempts]);

	return (
		<div
			key={`div-${indexRow}`}
			className={`row-board${totalAttempts - attempt >= indexRow ? '' : ' d-none'}`}
		>
			{/* answer board */}
			<ul key={`solution-${indexRow}`}>
				{totalOk.length
					? totalOk[0].answers.map((answer, id) => (
							<li key={`answer-${id}`} className={`answer-hole ${answer}`}></li>
					  ))
					: row.map((id) => <li key={`empty-${id}`} className="answer-hole"></li>)}
			</ul>
			{/* game board */}
			<ul key={`game-${indexRow}`}>
				{row.map((id) => (
					<Hole key={`big-${id}`} position={id + 1} indexRow={indexRow} />
				))}
				<button
					key={`button-${indexRow}`}
					className={`${totalAttempts - attempt === indexRow ? '' : 'invisible'}${
						targetHoles.length === (totalAttempts - attempt + 1) * totalColumns
							? ''
							: ' disabled'
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
