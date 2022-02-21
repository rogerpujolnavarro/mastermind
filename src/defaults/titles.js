// defaults
import { totalAttempts, totalColumns } from './parameters';

const titles = {
	ca: { help: 'Com jugar-hi', options: 'Personalització', stats: 'Estadístiques' },
	es: { help: 'Como jugar', options: 'Personalización', stats: 'Estadísticas' },
	en: { help: 'How to play', options: 'Customization', stats: 'Statistics' },
};

const statsText = {
	ca: { games: 'Partides', solved: 'Resolts', unsolved: 'Fallats', attempt: 'Intent' },
	es: { games: 'Partidas', solved: 'Resueltos', unsolved: 'Fallados', attempt: 'Intento' },
	en: { games: 'Games', solved: 'Solved', unsolved: 'Unsolved', attempt: 'Attempt' },
};
const helpTexts = {
	ca: [
		`Troba la combinació de ${totalColumns} colors en ${totalAttempts} intents`,
		`Introdueix una combinació de colors i clica ↲`,
		`Després de cada intent, es mostren els encerts`,
		`En negre, els colors en la posició correcte`,
		`En blanc, els colors que hi són, però en una altra posició`,
		`L'ordre de la solució no correspon a la de cada intent`,
	],
	es: [
		`Encuentra la combinación de ${totalColumns} colores en ${totalAttempts} intentos`,
		`Introduce una combinación de colors y haz clic a ↲`,
		`Después de cada intento, se muestran los aciertos`,
		`En negro, los colores en la posición correcta`,
		`En blanco, los colores que hi estan, pero en otra posición`,
		`El ordren de la solución no corresponde a la de cada intento`,
	],
	en: [
		`Find the combination of ${totalColumns} colors in ${totalAttempts} attempts`,
		`Enter a color scheme and click ↲`,
		`After each attempt, the hits are shown`,
		`In black, colors in the correct position`,
		`In white, colors that are there, but in a different position`,
		`The order of the solution doesn't match with each attempt`,
	],
};
export { helpTexts, titles, statsText };
