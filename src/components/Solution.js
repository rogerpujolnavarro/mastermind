// react
import { useContext } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
// contexts
import SettingsContext from '../contexts/SettingsContext';
import SolutionContext from '../contexts/SolutionContext';
// defaults
import { colors } from '../defaults/parameters';

const Solution = ({ id }) => {
	const { mode } = useContext(SettingsContext);
	const { solution, endGame } = useContext(SolutionContext);

	const activeIndexColor = colors.findIndex((color) => color === solution[id]);

	return (
		<li
			className={`solution-hole${endGame ? ' show' : ''}${
				endGame ? (mode.pattern ? ' pattern' : ' color') + activeIndexColor : ''
			}`}
		>
			{!endGame && <FiHelpCircle />}
		</li>
	);
};

export default Solution;
