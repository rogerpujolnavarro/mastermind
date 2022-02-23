// react
import { useContext } from 'react';
import { FiCornerDownLeft, FiRefreshCcw } from 'react-icons/fi';
// contexts
import SettingsContext from '../contexts/SettingsContext';
// defaults
import { helpTexts } from '../defaults/texts';

const Help = () => {
	const { language } = useContext(SettingsContext);
	return (
		<ul className="help">
			{helpTexts[language].map((text, index) => (
				<li key={index}>
					<span>{text}</span>

					{index === 1 && (
						<button>
							<FiCornerDownLeft />
						</button>
					)}

					{index === 3 && (
						<div>
							<span className="answer-hole positionOk"></span>
							<span className="answer-hole positionOk"></span>
							<span className="answer-hole"></span>
							<span className="answer-hole"></span>
							<span className="answer-hole"></span>
						</div>
					)}

					{index === 4 && (
						<div>
							<span className="answer-hole colorOk"></span>
							<span className="answer-hole colorOk"></span>
							<span className="answer-hole colorOk"></span>
							<span className="answer-hole"></span>
							<span className="answer-hole"></span>
						</div>
					)}

					{index === 7 && (
						<button>
							<FiRefreshCcw />
						</button>
					)}
				</li>
			))}
		</ul>
	);
};

export default Help;
