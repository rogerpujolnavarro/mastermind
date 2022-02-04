// react
import { useContext } from 'react';
// components
import Pins from './Pins';
import Solution from './Solution';
import TableRow from './TableRow';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import SolutionContext from '../contexts/SolutionContext';

const Board = () => {
	const { totalAttempts, totalColumns } = useContext(AttemptContext);
	const { onNewGame } = useContext(SolutionContext);

	let board = [];
	for (let currentRow = 0; currentRow < totalAttempts; currentRow++) {
		let row = [];
		for (let currentCol = 0; currentCol < totalColumns; currentCol++) {
			row = [...row, currentCol + currentRow + (totalColumns - 1) * currentRow];
		}
		board = [...board, row];
	}

	return (
		<main>
			<div className="solution">
				<ul>
					{board[0].map((id) => (
						<Solution key={`solution-${id}`} id={id} />
					))}
					<button className="" onClick={onNewGame}>
						new
					</button>
				</ul>
			</div>

			{board.map((row, index) => (
				<TableRow key={`table-${index}`} row={row} indexRow={index} />
			))}
			<ul className="pin-board">
				<Pins />
			</ul>
		</main>
	);
};

export default Board;
