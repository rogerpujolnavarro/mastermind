// react
import { useContext } from 'react';
// contexts
import SettingsContext from '../contexts/SettingsContext';
// defaults
import { getLocal } from '../defaults/functions';
import { statsText } from '../defaults/titles';

const Stats = () => {
	const { language } = useContext(SettingsContext);

	const data = getLocal('games') ? getLocal('games') : [];
	const solved = data.filter((game) => game.solved).length;
	const unsolved = data.filter((game) => !game.solved).length;
	const totalGames = solved + unsolved;
	let counts = {};
	data.filter((attempt) => attempt.solved)
		.map((attempt) => attempt.attempts)
		.forEach((attempt) => {
			counts[attempt] = (counts[attempt] || 0) + 1;
		});
	let stats = [];
	for (const attempt in counts) {
		stats = [
			...stats,
			{ attempt: parseInt(attempt), percent: (counts[attempt] * 100) / totalGames },
		];
	}
	// stats = [...stats, { attempt: '0', percent: (unsolved * 100) / totalGames }];

	console.log(stats);
	return (
		<div>
			<ul>
				<li>
					<span>{totalGames}</span>
					{` `}
					<span>{statsText[language].games}</span>
				</li>
				<li>
					<span>{solved}</span>
					{` `}
					<span>{statsText[language].solved}</span>
				</li>
				<li>
					<span>{unsolved}</span>
					{` `}
					<span>{statsText[language].unsolved}</span>
				</li>
			</ul>
			{stats
				.sort((attempt1, attempt2) => attempt1.attempt - attempt2.attempt)
				.map(({ attempt, percent }) => (
					<div key={`div-${attempt}`}>
						<label key={`lab-${attempt}`} htmlFor={attempt}>
							{attempt}
						</label>
						<progress
							key={`progress-${attempt}`}
							id={attempt}
							name={attempt}
							min="0"
							max="100"
							value={percent}
						>
							{percent.toFixed(2)}%
						</progress>
					</div>
				))}
		</div>
	);
};

export default Stats;
