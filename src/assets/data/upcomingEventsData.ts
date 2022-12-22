import sanFran from '../../assets/Images/SanFran.png';
import teams from '../../assets/Images/Teams.png';
import { IUpcomingEvent } from '../../utils/types';

export interface IcomingEvent {
	start: Date;
	stop: Date;
	location: string;
	text: string;
	title: string;
	imgUrl: string;
}

export const upcomingEventsData: IUpcomingEvent[] = [
	{
		start: new Date(),
		stop: new Date(),
		location: 'San Francisco, USA',
		text: 'Lorem ipsum dolor sit amet consectetur. Quis arcu dictumst eget adipiscing ut consequat. Sollicitudin euismod dictum at massa eget eget hendrerit. Facilisi ultrices sed tortor neque urna dolor scelerisque. Nisl est pellentesque mollis lobortis cras venenatis in ut.',
		title: 'Inspiration Tour',
		imgUrl: sanFran,
	},
	{
		start: new Date(),
		stop: new Date(),
		location: 'Online',
		text: 'Lorem ipsum dolor sit amet consectetur. Quis arcu dictumst eget adipiscing ut consequat. Sollicitudin euismod dictum at massa eget eget hendrerit. Facilisi ultrices sed tortor neque urna dolor scelerisque. Nisl est pellentesque mollis lobortis cras venenatis in ut.',
		title: 'Catch Up',
		imgUrl: teams,
	},
	{
		start: new Date(),
		stop: new Date(),
		location: 'Online',
		text: 'Lorem ipsum dolor sit amet consectetur. Quis arcu dictumst eget adipiscing ut consequat. Sollicitudin euismod dictum at massa eget eget hendrerit. Facilisi ultrices sed tortor neque urna dolor scelerisque. Nisl est pellentesque mollis lobortis cras venenatis in ut.',
		title: 'Yearly Summation',
		imgUrl: teams,
	},
	{
		start: new Date(),
		stop: new Date(),
		location: 'Online',
		text: 'Lorem ipsum dolor sit amet consectetur. Quis arcu dictumst eget adipiscing ut consequat. Sollicitudin euismod dictum at massa eget eget hendrerit. Facilisi ultrices sed tortor neque urna dolor scelerisque. Nisl est pellentesque mollis lobortis cras venenatis in ut.',
		title: 'Quarterly Planning',
		imgUrl: teams,
	},
];
