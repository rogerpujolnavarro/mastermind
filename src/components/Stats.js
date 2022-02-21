// react
import { useContext } from 'react';
// components
import Graphic from './Graphic';
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
			{
				id: attempt,
				label: `${statsText[language].attempt} ${attempt}⌁ ${counts[attempt]}`,
				value: ((counts[attempt] * 100) / totalGames).toFixed(1),
			},
		];
	}
	stats = [
		...stats,
		{
			id: '0',
			label: `${statsText[language].unsolved}⌁ ${unsolved}`,
			value: ((unsolved * 100) / totalGames).toFixed(1),
			color: 'red',
		},
	];

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
			<div className="graphic">
				<Graphic data={stats.sort((id1, id2) => id1.id - id2.id)} />
			</div>
		</>
	);
};

export default Stats;
