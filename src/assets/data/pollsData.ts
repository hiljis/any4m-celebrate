import { IPoll } from '../../utils/types';

export interface Ill {
	question: string;
	alt1: string;
	alt2: string;
	alt3: string;
	votesAlt1: number[];
	votesAlt2: number[];
	votesAlt3: number[];
}

export const pollsData: IPoll[] = [
	{
		question: 'Like our current linter?',
		alt1: 'Yes',
		alt2: 'No',
		alt3: 'Indifferent',
		votesAlt1: [1, 2, 3],
		votesAlt2: [4, 5, 6, 7, 8, 9],
		votesAlt3: [10, 11, 12],
	},
	{
		question: 'What CSS Framework to use?',
		alt1: 'Tailwind',
		alt2: 'Sass',
		alt3: 'Styled Components',
		votesAlt1: [8, 2, 3, 4, 5, 6],
		votesAlt2: [7, 1, 9],
		votesAlt3: [10, 11, 12],
	},
	{
		question: 'Where should we go next?',
		alt1: 'Portugal',
		alt2: 'Ireland',
		alt3: 'Poland',
		votesAlt1: [5],
		votesAlt2: [2, 3, 4],
		votesAlt3: [1, 6, 7, 8, 9, 10, 11, 12],
	},
];
