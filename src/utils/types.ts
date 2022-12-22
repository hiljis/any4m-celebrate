export type appColor = 'white' | 'black' | 'primary' | 'secondary' | 'dark' | 'light';

export interface INews {
	id: number;
	title: string;
	text: string[];
	imgUrl: string;
	date: Date;
	newsType: string;
}

export interface IFirestoreTimestamp {
	seconds: number;
	nanoseconds: number;
}
