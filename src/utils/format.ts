import { enumMonth } from './convert';
import { IFirestoreTimestamp } from './types';

export const dateToYYYYMMM = (timestamp: IFirestoreTimestamp): string => {
	const date = new Date(timestamp.seconds * 1000);
	const year = date.getFullYear();
	const month = enumMonth[date.getMonth()];
	return `${year} ${month}`;
};

export const dateToYYYY = (timestamp: IFirestoreTimestamp) => {
	const date = new Date(timestamp.seconds * 1000);
	const year = date.getFullYear();
	return `${year}`;
};
