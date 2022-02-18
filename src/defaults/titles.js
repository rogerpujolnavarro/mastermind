// defaults
import { totalAttempts, totalColumns } from './parameters';

const titles = {
	ca: { help: 'Com jugar-hi', options: 'Personalització', stats: 'Estadístiques' },
	es: { help: 'Como jugar', options: 'Personalización', stats: 'Estadísticas' },
	en: { help: 'How to play', options: 'Customization', stats: 'Statistics' },
};

const statsText = {
	ca: { games: 'Partides', solved: 'Resolts', unsolved: 'No resolts' },
	es: { games: 'Partidas', solved: 'Resueltos', unsolved: 'No resueltos' },
	en: { games: 'Games', solved: 'Solved', unsolved: 'Unsolved' },
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
		`Troba la combinació de ${totalColumns} colors en ${totalAttempts} intents`,
		`Introdueix una combinació de colors i clica a OK`,
		`Després de cada intent, a l'esquerra es mostren els encerts`,
		`En negre es mostren els colors en la posició correcte`,
		`En blanc els colors que hi són, però en una altra posició`,
		`L'ordre de la com es mostra la solució no correspon a la de cada intent`,
	],
};
export { helpTexts, titles, statsText };
