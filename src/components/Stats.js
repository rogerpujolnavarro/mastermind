// react
import { useContext } from 'react';
// contexts
import SettingsContext from '../contexts/SettingsContext';
// defaults
import { getLocal } from '../defaults/functions';
import { statsText } from '../defaults/texts';

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
			{
				id: attempt,
				label: `${attempt}`,
				value: counts[attempt],
				percent: ((counts[attempt] * 100) / totalGames).toFixed(1),
			},
		];
	}

	return (
		<>
			<ul className="stats">
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
				.sort((id1, id2) => id1.id - id2.id)
				.map((attempt) => (
					<div key={`graphic-${attempt.id}`} className="graphic">
						<span key={`label-${attempt.id}`} className="text-label">
							{attempt.label}
						</span>
						<div key={`container-bar-${attempt.id}`} className="container-bar">
							<div
								key={`bar-${attempt.id}`}
								className="bar"
								style={{ width: `${attempt.percent}%` }}
							>
								<span key={`text-${attempt.id}`} className="text-stats">
									{`${attempt.value} ⌁ ${attempt.percent}%`}
								</span>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Stats;
