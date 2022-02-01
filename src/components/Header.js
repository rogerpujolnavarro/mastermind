import { FiAward, FiHelpCircle, FiSliders } from 'react-icons/fi';

const Header = () => {
	const showHelp = () => {
		console.log('help');
	};
	const showStats = () => {
		console.log('stats');
	};
	const showSetup = () => {
		console.log('setup');
	};
	return (
		<header>
			<nav>
				<FiHelpCircle onClick={showHelp} />
				<div>
					<FiAward onClick={showStats} />
					<FiSliders onClick={showSetup} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
