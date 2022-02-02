import { useEffect, useState } from 'react';
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
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

	const changeAttempt = () => {
		console.log(attempt);
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
