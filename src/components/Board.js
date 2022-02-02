import { useContext, useEffect, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import PinContext from '../contexts/PinContext';
import AttemptContext from '../contexts/AttemptContext';
import ColorContext from '../contexts/ColorsContext';

const Board = () => {
	const { attempt, totalAttempts, totalColumns, onChangeAttempt } = useContext(AttemptContext);
	const { onChangePin, targetHoles } = useContext(PinContext);
	const { colors } = useContext(ColorContext);

	let board = [];
	for (let currentRow = 0; currentRow < totalAttempts; currentRow++) {
		let row = [];
		for (let currentCol = 0; currentCol < totalColumns; currentCol++) {
			row = [...row, currentCol + currentRow + (totalColumns - 1) * currentRow];
		}
		board = [...board, row];
	}

	const createGradient = (color) => {
		return `radial-gradient(circle at 100px 100px, white 40%, ${color})`;
	};

	return (
		<main>
			<ul className="solution">
				{board[0].map((box) => (
					<li key={box} className="solution-hole">
						<FiHelpCircle />
					</li>
				))}
				<button className="invisible disabled">check</button>
			</ul>
			{board.reverse().map((row, index) => (
				<div key={`div-${index}`} className="row-board">
					<ul key={`solution-${index}`}>
						{row.map((n) => (
							<li key={`small-${n}`} className="small-hole"></li>
						))}
					</ul>
					<ul key={`game-${index}`}>
						{row.map((n) => (
							<li
								key={`big-${n}`}
								className={`${
									totalAttempts - attempt === index ? '' : 'disabled'
								} hole`}
								style={{
									backgroundImage: targetHoles.filter(
										(hole) => hole.position === n + 1
									).length
										? createGradient(
												targetHoles.filter(
													(hole) => hole.position === n + 1
												)[0].color
										  )
										: 'none',
								}}
								onClick={() => {
									onChangePin(false, n + 1);
								}}
							></li>
						))}
						<button
							className={`${totalAttempts - attempt > index ? 'invisible' : ''} ${
								targetHoles.length === attempt * totalColumns ? '' : 'disabled'
							}`}
							onClick={onChangeAttempt}
						>
							check
						</button>
					</ul>
				</div>
			))}
			<ul className="pin-board">
				{colors.map((color) => (
					<li
						key={color}
						className="pins"
						style={{
							backgroundImage: createGradient(color),
						}}
						onClick={() => onChangePin(color, false)}
						draggable
					></li>
				))}
			</ul>
		</main>
	);
};

export default Board;
