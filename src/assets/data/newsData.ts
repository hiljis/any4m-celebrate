import newsImg from '../../assets/Images/news.png';
import { INews } from '../../utils/types';

export const newsData: INews[] = [
	{
		id: 1,
		title: 'We did it!',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic provident magni. Autem esse, nam excepturi, quam minus neque, rem impedit a adipisci vitae vel similique laborum accusantium quidem laudantium.',
		],
		imgUrl: newsImg,
		date: new Date(),
		newsType: 'Event',
	},
	{
		id: 2,
		title: 'Sprint Planning',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic provident magni. Autem esse, nam excepturi, quam minus neque, rem impedit a adipisci vitae vel similique laborum accusantium quidem laudantium.',
		],
		imgUrl: newsImg,
		date: new Date(),
		newsType: 'Event',
	},
	{
		id: 3,
		title: 'Meeting with Wästbygg',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic provident magni. Autem esse, nam excepturi, quam minus neque, rem impedit a adipisci vitae vel similique laborum accusantium quidem laudantium.',
		],
		imgUrl: newsImg,
		date: new Date(),
		newsType: 'Event',
	},
	{
		id: 4,
		title: 'Kick Off in Oslo',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic provident magni. Autem esse, nam excepturi, quam minus neque, rem impedit a adipisci vitae vel similique laborum accusantium quidem laudantium.',
		],
		imgUrl: newsImg,
		date: new Date(),
		newsType: 'Event',
	},
	{
		id: 5,
		title: 'New Contract',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic provident magni. Autem esse, nam excepturi, quam minus neque, rem impedit a adipisci vitae vel similique laborum accusantium quidem laudantium.',
		],
		imgUrl: newsImg,
		date: new Date(),
		newsType: 'Event',
	},
	{
		id: 6,
		title: 'Welcome Peter',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic provident magni. Autem esse, nam excepturi, quam minus neque, rem impedit a adipisci vitae vel similique laborum accusantium quidem laudantium.',
		],
		imgUrl: newsImg,
		date: new Date(),
		newsType: 'Event',
	},
];
