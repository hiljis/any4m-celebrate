import { enumMonth } from './convert';
import { IFirestoreTimestamp } from './types';

export const dateToDDMMMYYYY = (date: Date): string => {
	const year = date.getFullYear();
	const month = enumMonth[date.getMonth()];
	const day = date.getDate().toString().padStart(2, '0');
	return `${day} ${month} ${year}`;
};

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
