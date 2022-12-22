import postImg from '../../assets/Images/post.png';
import { IPost } from '../../utils/types';

export const postsData: IPost[] = [
	{
		id: 1,
		userId: 11,
		title: 'Riddle of the day',
		likes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		feeling: 'clever',
		imgUrl: postImg,
		text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
		comments: [
			{
				userId: 11,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
			{
				userId: 10,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
			{
				userId: 4,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
		],
	},
	{
		id: 2,
		userId: 7,
		title: 'What a day...',
		likes: [2, 3, 4, 5, 6, 7, 8],
		feeling: 'exhausted',
		imgUrl: postImg,
		text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
		comments: [
			{
				userId: 11,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
		],
	},
	{
		id: 3,
		userId: 6,
		title: 'Hahahaha!',
		likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		feeling: 'funny',
		imgUrl: postImg,
		text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
		comments: [
			{
				userId: 11,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
		],
	},
	{
		id: 4,
		userId: 5,
		title: 'On a roll',
		likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		feeling: 'happy',
		imgUrl: postImg,
		text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
		comments: [
			{
				userId: 3,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
		],
	},
	{
		id: 5,
		userId: 12,
		title: 'Beautiful Mondays',
		likes: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		feeling: 'great',
		imgUrl: postImg,
		text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
		comments: [
			{
				userId: 5,
				postId: 1,
				date: new Date(),
				text: 'Lorem ipsum dolor sit amet consectetur. Nisi est pellentesque vivamus tempor sed aliquam dictum sed proin.',
			},
		],
	},
];
