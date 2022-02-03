// react
import { useContext } from 'react';
// contexts
import ColorContext from '../contexts/ColorsContext';
import PinContext from '../contexts/PinContext';
// defaults
import { createGradient } from '../defaults/functions';

const Pins = () => {
	const { colors } = useContext(ColorContext);
	const { onChangePin } = useContext(PinContext);

	return (
		<>
			{colors.map((color) => (
				<li
					key={color}
					className="pins"
					style={{
						backgroundImage: createGradient(color),
					}}
					onClick={() => onChangePin(color, false)}
				></li>
			))}
		</>
	);
};

export default Pins;
