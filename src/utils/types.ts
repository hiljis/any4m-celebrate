export type appColor =
	| 'white'
	| 'black'
	| 'primary'
	| 'primary--light'
	| 'secondary'
	| 'dark'
	| 'light'
	| 'grey'
	| 'transparent';

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

export interface IEvent {
	start: Date;
	stop: Date;
	location: string;
	text: string;
	title: string;
	imgUrl: string;
}

export interface IPost {
	id: number;
	userId: number;
	title: string;
	likes: number[];
	feeling: Feeling;
	imgUrl: string;
	text: string;
	comments: IComment[];
}

export interface IComment {
	userId: number;
	postId: number;
	date: Date;
	text: string;
}

export type Feeling = 'clever' | 'exhausted' | 'funny' | 'happy' | 'great';

export interface IPoll {
	question: string;
	alt1: string;
	alt2: string;
	alt3: string;
	votesAlt1: number[];
	votesAlt2: number[];
	votesAlt3: number[];
}

export interface IFirestoreTimestamp {
	seconds: number;
	nanoseconds: number;
}
