// react
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
// components
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
import Help from './components/Help';
import Options from './components/Options';
import Stats from './components/Stats';
// contexts
import AttemptContext from './contexts/AttemptContext';
import ColorContext from './contexts/ColorsContext';
import PinContext from './contexts/PinContext';
import SettingsContext from './contexts/SettingsContext';
import SolutionContext from './contexts/SolutionContext';
// defaults
import { getLocal, saveLocal } from './defaults/functions';
import { colors, totalAttempts, totalColumns } from './defaults/parameters';
import { titles } from './defaults/texts';

function App() {
	// estats
	const [activePin, setActivePin] = useState(false);
	const [targetHoles, setTargetHoles] = useState(
		getLocal('targetHoles') ? getLocal('targetHoles') : []
	);
	const [answerHoles, setAnswerHoles] = useState(
		getLocal('answerHoles') ? getLocal('answerHoles') : []
	);
	const [attempt, setAttempt] = useState(
		getLocal('attempt') ? getLocal('attempt') : totalAttempts
	);
	const [endGame, setEndGame] = useState(getLocal('endGame'));
	const [activeWindow, setActiveWindow] = useState(false);

	const createCombination = () => {
		const newCombination = [];
		for (let i = 0; i < totalColumns; i++) {
			newCombination[i] = colors[Math.floor(Math.random() * colors.length)];
		}
		return newCombination;
	};
	const [solution, setSolution] = useState(
		getLocal('solution') ? getLocal('solution') : createCombination
	);

	const [language, setLanguage] = useState(getLocal('language') ? getLocal('language') : 'ca');
	const [mode, setMode] = useState(
		getLocal('mode') ? getLocal('mode') : { dark: true, appearance: 'vintage' }
	);

	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage);
	};
	const changeMode = (newMode) => {
		setMode(newMode);
	};

	useEffect(() => {
		console.log(solution);
		saveLocal('solution', solution);
	}, [solution]);

	useEffect(() => {
		attempt === 0 && setEndGame(true);
		saveLocal('attempt', attempt);
	}, [attempt]);

	useEffect(() => {
		const saveStats = () => {
			const games = getLocal('games') ? getLocal('games') : [];
			saveLocal('games', [
				...games,
				{
					attempts: attempt ? totalAttempts - attempt + 1 : totalAttempts,
					solved: attempt ? true : false,
				},
			]);
		};
		saveLocal('endGame', endGame);
		endGame && saveStats();
	}, [attempt, endGame]);

	useEffect(() => {
		saveLocal('answerHoles', answerHoles);
	}, [answerHoles]);

	useEffect(() => {
		saveLocal('targetHoles', targetHoles);
	}, [targetHoles]);

	useEffect(() => {
		saveLocal('language', language);
	}, [language]);

	const dark = '33, 33, 33';
	const light = '238, 238, 238';
	const gray = '100, 100, 100';
	const mainColor = '137, 82, 61';
	const primaryDark = '102, 52, 239';
	const primaryLight = '147, 112, 243';
	const primaryModern = '28, 101, 140';
	const mainColorModern = '57, 138, 185';

	const changeColors = (modeDark) => {
		if (modeDark) {
			document.documentElement.style.setProperty('--dark', dark);
			document.documentElement.style.setProperty('--light', light);
			document.documentElement.style.setProperty('--gray', gray);
			document.documentElement.style.setProperty('--main-color', mainColor);
			document.documentElement.style.setProperty('--primary', primaryDark);
		} else {
			document.documentElement.style.setProperty('--light', dark);
			document.documentElement.style.setProperty('--dark', light);
			document.documentElement.style.setProperty('--gray', light);
			document.documentElement.style.setProperty('--main-color', mainColor);
			document.documentElement.style.setProperty('--primary', primaryLight);
		}
	};

	const changeAppearance = (appearance) => {
		if (appearance !== 'vintage') {
			document.documentElement.style.setProperty('--image', 'url("./background.png")');
			document.documentElement.style.setProperty('--main-color', mainColorModern);
			document.documentElement.style.setProperty('--primary', primaryModern);
		} else {
			document.documentElement.style.setProperty('--image', '');
			document.documentElement.style.setProperty('--main-color', mainColor);
		}
	};

	useEffect(() => {
		saveLocal('mode', mode);
		changeColors(mode.dark);
		changeAppearance(mode.appearance);
	}, [mode]);

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
		let askedColors = targetHoles
			.filter(({ position }) => position >= firstIndex && position <= lastIndex)
			.sort((target1, target2) => target1.position - target2.position)
			.map((target) => target.color);

		// taula de colors a la posició correcta
		const positionOk = solution.filter((color, index) => color === askedColors[index]);

		// elimina de la taula de preguntats els que ja tenen posició correcta
		askedColors = askedColors.filter((color, index) => color !== solution[index]);

		// taula de colors encertats sense la posició
		let colorOk = [];
		for (const color of solution.filter((color, index) => color !== askedColors[index])) {
			if (askedColors.includes(color)) {
				colorOk = [...colorOk, color];
				askedColors[askedColors.findIndex((askedColor) => color === askedColor)] = '';
			}
		}

		let tableAnswers = [];
		for (let index = 0; index < positionOk.length; index++) {
			tableAnswers = [...tableAnswers, 'positionOk'];
		}
		for (let index = 0; index < colorOk.length; index++) {
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

	const changeAttempt = () => {
		checkAttempt(attempt) ? setEndGame(true) : setAttempt(attempt - 1);
	};

	const newGame = () => {
		setActivePin(false);
		setTargetHoles([]);
		setAnswerHoles([]);
		setAttempt(totalAttempts);
		setEndGame(false);
		setSolution(createCombination);
	};

	const showWindow = (window) => {
		setActiveWindow(window);
	};

	return (
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
				<PinContext.Provider
					value={{
						activePin: activePin,
						answerHoles: answerHoles,
						targetHoles: targetHoles,
						onChangePin: changePin,
					}}
				>
					<SettingsContext.Provider
						value={{
							language: language,
							mode: mode,
							onChangeLanguage: changeLanguage,
							onChangeMode: changeMode,
							onShowWindow: showWindow,
						}}
					>
						<SolutionContext.Provider
							value={{ solution: solution, endGame: endGame, onNewGame: newGame }}
						>
							<Header />
							{activeWindow && (
								<div className="window">
									<header>
										<h3>{titles[language][activeWindow]}</h3>
										<button onClick={() => showWindow(false)}>
											<FiX />
										</button>
									</header>
									{activeWindow === 'help' && <Help />}
									{activeWindow === 'options' && <Options />}
									{activeWindow === 'stats' && <Stats />}
								</div>
							)}
							{!activeWindow && <Board />}
							<Footer />
						</SolutionContext.Provider>
					</SettingsContext.Provider>
				</PinContext.Provider>
			</ColorContext.Provider>
		</AttemptContext.Provider>
	);
}

export default App;
