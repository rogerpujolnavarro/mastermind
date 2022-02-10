// react
import { useContext } from 'react';
import { FiAward, FiHelpCircle, FiSliders } from 'react-icons/fi';
// contexts
import SettingsContext from '../contexts/SettingsContext';

const Header = () => {
	const { showHelp, showOptions, showStats } = useContext(SettingsContext);

	return (
		<header>
			<nav>
				<FiHelpCircle onClick={() => showHelp(true)} />
				<FiAward onClick={() => showStats(true)} />
				<FiSliders onClick={() => showOptions(true)} />
			</nav>
		</header>
	);
};

export default Header;
