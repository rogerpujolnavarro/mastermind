// react
import { useContext, useEffect, useState } from 'react';
// components
import Hole from './Hole';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import PinContext from '../contexts/PinContext';

const TableRow = ({ indexRow, row }) => {
	const { attempt, totalAttempts } = useContext(AttemptContext);
	const { answerHoles } = useContext(PinContext);

	const [totalOk, setTotalOk] = useState(
		answerHoles.filter((answer) => answer.attempt === totalAttempts - indexRow)
	);

	useEffect(() => {
		setTotalOk(answerHoles.filter((answer) => answer.attempt === totalAttempts - indexRow));
	}, [answerHoles, indexRow, totalAttempts]);

	return (
		<>
			{totalAttempts - attempt >= indexRow && (
				<div className="row-board">
					{/* answer board */}
					<ul>
						{totalOk.length
							? totalOk[0].answers.map((answer, id) => (
									<li
										key={`answer-${id}`}
										className={`answer-hole ${answer}`}
									></li>
							  ))
							: row.map((id) => (
									<li key={`empty-${id}`} className="answer-hole"></li>
							  ))}
					</ul>
					{/* game board */}
					<ul>
						{row.map((id) => (
							<Hole key={`big-${id}`} position={id + 1} indexRow={indexRow} />
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default TableRow;
