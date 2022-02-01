import { FiHelpCircle } from 'react-icons/fi';

const Board = () => {
	const rows = 12;
	const columns = 5;
	const board = [];
	for (let currentRow = 0; currentRow < rows; currentRow++) {
		const row = [];
		for (let currentCol = 0; currentCol < columns; currentCol++) {
			row.push(currentCol + currentRow + (columns - 1) * currentRow);
		}
		board.push(row);
	}
	return (
		<main>
			<ul className="solution">
				<li data-index="0" className="solution-hole">
					<FiHelpCircle />
				</li>
				<li data-index="1" className="solution-hole">
					<FiHelpCircle />
				</li>
				<li data-index="2" className="solution-hole">
					<FiHelpCircle />
				</li>
				<li data-index="3" className="solution-hole">
					<FiHelpCircle />
				</li>
				<li data-index="4" className="solution-hole">
					<FiHelpCircle />
				</li>
			</ul>
			{board.reverse().map((row, index) => (
				<div key={`div-${index}`} className="row-board">
					<ul key={`solution-${index}`}>
						{row.map((n) => (
							<li key={`small-${n}`} data-index={n} className="small-hole"></li>
						))}
					</ul>
					<ul key={`game-${index}`}>
						{row.map((n) => (
							<li key={`big-${n}`} data-index={n} className="hole"></li>
						))}
					</ul>
				</div>
			))}
			<ul className="pin-board">
				<li className="pins pin-white"></li>
				<li className="pins pin-blue"></li>
				<li className="pins pin-red"></li>
				<li className="pins pin-green"></li>
				<li className="pins pin-yellow"></li>
				<li className="pins pin-black"></li>
				<li className="pins pin-brown"></li>
				<li className="pins pin-orange"></li>
			</ul>
		</main>
	);
};

export default Board;
