// react
import { useContext } from 'react';
// contexts
import SettingsContext from '../contexts/SettingsContext';
// defaults
import { helpTexts } from '../defaults/texts';

const Help = () => {
	const { language } = useContext(SettingsContext);
	return (
		<ul className="help">
			{helpTexts[language].map((text, index) => (
				<li key={index}>{text}</li>
			))}
		</ul>
	);
};

export default Help;
