// react
import { useContext } from 'react';
// contexts
import SettingsContext from '../contexts/SettingsContext';

const Options = () => {
	const { language, mode, onChangeLanguage, onChangeMode } = useContext(SettingsContext);
	return (
		<div className="settings">
			<ul className="languages">
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
			<ul className="mode">
				<li
					className={mode.dark ? 'active' : ''}
					onClick={() => onChangeMode({ dark: true, appearance: mode.appearance })}
				>
					dark
				</li>
				<li
					className={mode.dark ? '' : 'active'}
					onClick={() => onChangeMode({ dark: false, appearance: mode.appearance })}
				>
					light
				</li>
			</ul>
			<ul className="mode">
				<li
					className={mode.appearance === 'vintage' ? 'active' : ''}
					onClick={() => onChangeMode({ dark: mode.dark, appearance: 'vintage' })}
				>
					vintage
				</li>
				<li
					className={mode.appearance === 'modern' ? 'active' : ''}
					onClick={() => onChangeMode({ dark: mode.dark, appearance: 'modern' })}
				>
					modern
				</li>
			</ul>
		</div>
	);
};

export default Options;
