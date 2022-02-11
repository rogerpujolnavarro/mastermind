// react
import { useContext } from 'react';
import { FiAward, FiHelpCircle, FiSliders } from 'react-icons/fi';
// contexts
import SettingsContext from '../contexts/SettingsContext';

const Header = () => {
	const { onShowWindow } = useContext(SettingsContext);

	return (
		<header>
			<nav>
				<FiHelpCircle onClick={() => onShowWindow('help')} />
				<FiAward onClick={() => onShowWindow('stats')} />
				<FiSliders onClick={() => onShowWindow('options')} />
			</nav>
		</header>
	);
};

export default Header;
