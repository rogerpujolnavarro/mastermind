// react
import { useEffect, useState } from 'react';
// components
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
// contexts
import AttemptContext from './contexts/AttemptContext';
import ColorContext from './contexts/ColorsContext';
import PinContext from './contexts/PinContext';

function App() {
	const totalAttempts = 12;
	const totalColumns = 5;
	const colors = ['white', 'blue', 'green', 'red', 'yellow', 'black', 'brown', 'orange'];

	const [activePin, setActivePin] = useState(false);
	const [targetHoles, setTargetHoles] = useState([]);
	const [attempt, setAttempt] = useState(1);
	const [solution, setSolution] = useState([]);

	const changePin = (color, position) => {
		console.log(position);
		position &&
			setTargetHoles([
				...targetHoles.filter((hole) => hole.position !== position),
				{ color: activePin, position: position },
			]);
		position &&
			!activePin &&
			setTargetHoles([...targetHoles.filter((hole) => hole.position !== position)]);
		// position && !activePin && delete targetHoles[position];
		// position && setTargetHoles((targetHoles[position] = activePin));
		setTargetHoles(targetHoles);

		setActivePin(color);
		console.log(targetHoles);
	};
	const createCombination = () => {
		const newCombination = [];
		for (let i = 0; i < totalColumns; i++) {
			newCombination[i] = colors[Math.round(Math.random() * colors.length)];
		}
		return newCombination;
	};

	const checkAttempt = (actualAttempt) => {
		// console.log(targetHoles);
		attempt === 1 && setSolution(createCombination);
		const correct = solution.filter(
			(color, index) => color === targetHoles[actualAttempt - 1][index].color
		);
		// console.log(correct);
	};

	const changeAttempt = () => {
		checkAttempt(attempt);
		setAttempt(attempt + 1);
	};

	return (
		<PinContext.Provider
			value={{ activePin: activePin, onChangePin: changePin, targetHoles: targetHoles }}
		>
			<AttemptContext.Provider
				value={{
					attempt: attempt,
					colors: colors,
					totalAttempts: totalAttempts,
					totalColumns: totalColumns,
					onChangeAttempt: changeAttempt,
				}}
			>
				<ColorContext.Provider value={{ colors: colors }}>
					<Header />
					<Board />
					<Footer />
				</ColorContext.Provider>
			</AttemptContext.Provider>
		</PinContext.Provider>
	);
}

export default App;
