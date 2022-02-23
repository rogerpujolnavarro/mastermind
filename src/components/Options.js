// react
import { useContext } from 'react';
// contexts
import SettingsContext from '../contexts/SettingsContext';
// defaults
import { optionTexts } from '../defaults/texts';

const Options = () => {
	const { language, mode, onChangeLanguage, onChangeMode } = useContext(SettingsContext);
	return (
		<div className="options">
			<ul>
				<li
					className={language === 'ca' ? 'active' : ''}
					onClick={() => onChangeLanguage('ca')}
				>
					ca
				</li>
				<li
					className={language === 'es' ? 'active' : ''}
					onClick={() => onChangeLanguage('es')}
				>
					es
				</li>
				<li
					className={language === 'en' ? 'active' : ''}
					onClick={() => onChangeLanguage('en')}
				>
					en
				</li>
			</ul>
			<ul>
				<li
					className={mode.dark ? 'active' : ''}
					onClick={() => onChangeMode({ dark: true, appearance: mode.appearance })}
				>
					{optionTexts[language].dark}
				</li>
				<li
					className={mode.dark ? '' : 'active'}
					onClick={() => onChangeMode({ dark: false, appearance: mode.appearance })}
				>
					{optionTexts[language].light}
				</li>
			</ul>
			<ul>
				<li
					className={mode.appearance === 'vintage' ? 'active' : ''}
					onClick={() => onChangeMode({ dark: mode.dark, appearance: 'vintage' })}
				>
					{optionTexts[language].vintage}
				</li>
				<li
					className={mode.appearance === 'modern' ? 'active' : ''}
					onClick={() => onChangeMode({ dark: mode.dark, appearance: 'modern' })}
				>
					{optionTexts[language].modern}
				</li>
			</ul>
		</div>
	);
};

export default Options;
