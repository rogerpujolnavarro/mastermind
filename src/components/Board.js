// react
import { useContext } from 'react';
// components
import Pins from './Pins';
import Solution from './Solution';
import TableRow from './TableRow';
// contexts
import AttemptContext from '../contexts/AttemptContext';

const Board = () => {
	const { totalAttempts, totalColumns } = useContext(AttemptContext);

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
			<ul className="solution">
				{board[0].map((id) => (
					<Solution key={`solution-${id}`} id={id} />
				))}
				<button className="invisible disabled">check</button>
			</ul>
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
