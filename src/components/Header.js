// react
import { useContext } from 'react';
import { FiAward, FiHelpCircle, FiSliders } from 'react-icons/fi';
// contexts
import SettingsContext from '../contexts/SettingsContext';

const Header = () => {
	const { showWindow } = useContext(SettingsContext);

	return (
		<header>
			<nav>
				<FiHelpCircle onClick={() => showWindow('help')} />
				<FiAward onClick={() => showWindow('stats')} />
				<FiSliders onClick={() => showWindow('options')} />
			</nav>
		</header>
	);
};

export default Header;
