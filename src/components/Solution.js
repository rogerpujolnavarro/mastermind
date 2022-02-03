// react
import { FiHelpCircle } from 'react-icons/fi';

const Solution = ({ id }) => {
	return (
		<li className="solution-hole" data-index={id}>
			<FiHelpCircle />
		</li>
	);
};

export default Solution;
