export type appColor = 'white' | 'black' | 'primary' | 'secondary' | 'dark' | 'light';

export interface INews {
	title: string;
}

export interface IFirestoreTimestamp {
	seconds: number;
	nanoseconds: number;
}
