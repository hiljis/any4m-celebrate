export type appColor = 'white' | 'black' | 'primary' | 'secondary' | 'dark' | 'light';

export interface INews {
	id: number;
	title: string;
	text: string[];
	imgUrl: string;
	date: Date;
	newsType: string;
}

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	role: string;
	city: string;
	country: string;
	info: string;
	phone: string;
	email: string;
	avatarUrl: string;
}

export interface IFirestoreTimestamp {
	seconds: number;
	nanoseconds: number;
}
