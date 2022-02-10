// react
import { useContext } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
// contexts
import SolutionContext from '../contexts/SolutionContext';
// defaults
import { createGradient } from '../defaults/functions';

const Solution = ({ id }) => {
	const { solution, endGame } = useContext(SolutionContext);
	return (
		<li
			className={`solution-hole${endGame ? ' show' : ''}`}
			style={{
				backgroundImage: endGame ? createGradient(solution[id]) : 'none',
			}}
		>
			{!endGame && <FiHelpCircle />}
		</li>
	);
};

export default Solution;
