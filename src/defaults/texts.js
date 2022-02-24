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

const optionTexts = {
	ca: {
		dark: 'fosc',
		light: 'clar',
		vintage: 'clàssic',
		modern: 'modern',
		colors: 'colors',
		pattern: 'formes',
	},
	es: {
		dark: 'oscuro',
		light: 'claro',
		vintage: 'clásico',
		modern: 'moderno',
		colors: 'colores',
		pattern: 'formas',
	},
	en: {
		dark: 'dark',
		light: 'light',
		vintage: 'classic',
		modern: 'modern',
		colors: 'colors',
		pattern: 'pattern',
	},
};

const helpTexts = {
	ca: [
		`Troba la combinació de ${totalColumns} colors en ${totalAttempts} intents`,
		`Introdueix una combinació de colors i clica`,
		`Després de cada intent, es mostren els encerts`,
		`En negre, els colors en la posició correcte (en l'exemple 2 encerts de posició i color)`,
		`En blanc, els colors que hi són, però en una altra posició (en aquest cas, 3 colors encertats en posicions incorrectes)`,
		`En aquest últim exemple, 1 color encertat en posició correcte, 1 color encertat però en una altra posició`,
		`L'ordre de la solució no correspon a la de cada intent`,
		`Es poden repetir colors`,
		`Comença una partida nova fent clic a`,
	],
	es: [
		`Encuentra la combinación de ${totalColumns} colores en ${totalAttempts} intentos`,
		`Introduce una combinación de colors y haz clic a`,
		`Después de cada intento, se muestran los aciertos`,
		`En negro, los colores en la posición correcta (en el ejemplo 2 aciertos de posición y color)`,
		`En blanco, los colores que hi estan, pero en otra posición (en este caso, 3 colores acertados en posiciones incorrectas)`,
		`En este último ejemplo, 1 color acertado en posición correcta, 1 color acertado pero en otra posición`,
		`El ordren de la solución no corresponde a la de cada intento`,
		`Se pueden repetir colores`,
		`Empieza una partida nueva haciendo clic en`,
	],
	en: [
		`Find the combination of ${totalColumns} colors in ${totalAttempts} attempts`,
		`Enter a color scheme and click`,
		`After each attempt, the hits are shown`,
		`In black, colors in the correct position (in the example 2 position and color hits)`,
		`In white, colors that are there, but in a different position (in this case, 3 correct colors in incorrect positions)`,
		`In the this last example, 1 color in the correct position, 1 right color but in another position`,
		`The order of the solution doesn't match with each attempt`,
		`Colors can be repeated`,
		`Start a new game by clicking on`,
	],
};

export { helpTexts, optionTexts, titles, statsText };
