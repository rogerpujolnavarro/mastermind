// react
import { useContext, useEffect, useRef } from 'react';
import { FiCornerDownLeft, FiRefreshCcw } from 'react-icons/fi';
// components
import Pins from './Pins';
import Solution from './Solution';
import TableRow from './TableRow';
// contexts
import AttemptContext from '../contexts/AttemptContext';
import PinContext from '../contexts/PinContext';
import SolutionContext from '../contexts/SolutionContext';

const Board = () => {
	const { attempt, onChangeAttempt, totalAttempts, totalColumns } = useContext(AttemptContext);
	const { targetHoles } = useContext(PinContext);
	const { endGame, onNewGame } = useContext(SolutionContext);

	const boardRef = useRef();

	useEffect(() => {
		boardRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [attempt, boardRef]);

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
				</ul>
				<button>
					<FiRefreshCcw onClick={onNewGame} />
				</button>
			</div>
			<div>
				<div className="board">
					{board.map((row, index) => (
						<TableRow key={`table-${index}`} row={row} indexRow={index} />
					))}
					<div ref={boardRef}></div>
				</div>
				<div className="pin-board">
					<button className="attempts" disabled>
						{totalAttempts - attempt + 1 + '⌁' + totalAttempts}
					</button>
					<Pins />
					<button
						className={`${
							targetHoles.length === (totalAttempts - attempt + 1) * totalColumns &&
							!endGame
								? ''
								: 'disabled'
						}`}
						onClick={onChangeAttempt}
					>
						<FiCornerDownLeft />
					</button>
				</div>
			</div>
		</main>
	);
};

export default Board;
