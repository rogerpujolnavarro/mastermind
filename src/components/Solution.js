// react
import { useContext } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
// contexts
import SolutionContext from '../contexts/SolutionContext';
// defaults
import { createGradient } from '../defaults/functions';

const Solution = ({ id }) => {
	const { solution, showSolution } = useContext(SolutionContext);
	return (
		<li
			className="solution-hole"
			style={{
				backgroundImage: showSolution ? createGradient(solution[id]) : 'none',
			}}
		>
			{!showSolution && <FiHelpCircle />}
		</li>
	);
};

export default Solution;
