import { getLocal } from '../defaults/functions';

const Stats = () => {
	const data = getLocal('games') ? getLocal('games') : [];
	return (
		<ul>
			{data.map((game, index) => (
				<li key={`stats-${index}`}>
					{game.attempts} - {game.solved ? 'si' : 'no'}
				</li>
			))}
		</ul>
	);
};

export default Stats;
