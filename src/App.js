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
import SolutionContext from './contexts/SolutionContext';

function App() {
	const totalAttempts = 12;
	const totalColumns = 5;
	const colors = ['black', 'blue', 'green', 'red', 'yellow', 'ivory', 'gray', 'orange'];

	const [activePin, setActivePin] = useState(false);
	const [targetHoles, setTargetHoles] = useState([]);
	const [answerHoles, setAnswerHoles] = useState([]);
	const [attempt, setAttempt] = useState(totalAttempts);

	const createCombination = () => {
		const newCombination = [];
		for (let i = 0; i < totalColumns; i++) {
			newCombination[i] = colors[Math.floor(Math.random() * colors.length)];
		}
		return newCombination;
	};
	const [solution, setSolution] = useState(createCombination);
	const [endGame, setEndGame] = useState(false);

	// useEffect(() => {
	// 	console.log(answerHoles);
	// }, [answerHoles]);

	useEffect(() => {
		console.log(solution);
	}, [solution]);

	useEffect(() => {
		attempt === 0 && showResult();
	}, [attempt]);

	const changePin = (color, position) => {
		position &&
			setTargetHoles([
				...targetHoles.filter((hole) => hole.position !== position),
				{ color: activePin, position: position },
			]);
		position &&
			!activePin &&
			setTargetHoles([...targetHoles.filter((hole) => hole.position !== position)]);
		setActivePin(color);
	};

	const checkAttempt = (actualAttempt) => {
		// càlcul rang indexs
		const firstIndex = 1 + (totalAttempts - actualAttempt) * totalColumns;
		const lastIndex = firstIndex + totalColumns - 1;

		// taula dels colors preguntats acotada segons els indexs, oredenada
		const askedColors = targetHoles
			.filter(({ position }) => position >= firstIndex && position <= lastIndex)
			.sort((target1, target2) => target1.position - target2.position)
			.map((target) => target.color);

		console.log('asked:', askedColors);

		// taula de colors a la posició correcta
		const positionOk = solution.filter((color, index) => color === askedColors[index]);
		console.log('ok:', positionOk);

		const colorOk = solution.filter((color) => askedColors.includes(color));
		console.log('color:', colorOk);
		console.log('---');

		let tableAnswers = [];
		for (let index = 0; index < positionOk.length; index++) {
			tableAnswers = [...tableAnswers, 'positionOk'];
		}
		for (let index = 0; index < colorOk.length - positionOk.length; index++) {
			tableAnswers = [...tableAnswers, 'colorOk'];
		}

		const actualLength = tableAnswers.length;
		if (actualLength < totalColumns) {
			for (let index = 0; index < totalColumns - actualLength; index++) {
				tableAnswers = [...tableAnswers, ''];
			}
		}
		setAnswerHoles([...answerHoles, { attempt: actualAttempt, answers: tableAnswers }]);
		return tableAnswers.filter((answer) => answer === 'positionOk').length === totalColumns;
	};

	const showResult = () => {
		setAttempt(0);
		setEndGame(true);
	};

	const changeAttempt = () => {
		checkAttempt(attempt) ? showResult() : setAttempt(attempt - 1);
	};

	const newGame = () => {
		setActivePin(false);
		setTargetHoles([]);
		setAnswerHoles([]);
		setAttempt(totalAttempts);
		setEndGame(false);
		setSolution(createCombination);
	};

	return (
		<PinContext.Provider
			value={{
				activePin: activePin,
				answerHoles: answerHoles,
				targetHoles: targetHoles,
				onChangePin: changePin,
			}}
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
				<SolutionContext.Provider
					value={{ solution: solution, showSolution: endGame, onNewGame: newGame }}
				>
					<ColorContext.Provider value={{ colors: colors }}>
						<Header />
						<Board />
						<Footer />
					</ColorContext.Provider>
				</SolutionContext.Provider>
			</AttemptContext.Provider>
		</PinContext.Provider>
	);
}

export default App;
