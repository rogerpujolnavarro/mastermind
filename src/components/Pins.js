// react
import { useContext } from 'react';
// contexts
import ColorContext from '../contexts/ColorsContext';
import PinContext from '../contexts/PinContext';
import SettingsContext from '../contexts/SettingsContext';

const Pins = () => {
	const { colors } = useContext(ColorContext);
	const { onChangePin } = useContext(PinContext);
	const { mode } = useContext(SettingsContext);

	return (
		<ul>
			{colors.map((color, index) => (
				<li
					key={color}
					className={`pins ${mode.pattern ? 'pattern' + index : 'color' + index}`}
					onClick={() => onChangePin(color, false)}
				></li>
			))}
		</ul>
	);
};

export default Pins;
