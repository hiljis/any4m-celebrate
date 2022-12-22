import { Fragment } from 'react';
import './CardList.scss';
import CardListItem from './CardListItem/CardListItem';

type Props = {
	header?: string;
	children: React.ReactNode | React.ReactNode[];
};

const CardList: React.FC<Props> = ({ header, children }) => {
	return (
		<Fragment>
			{header ? <h5 className="cardList__header">{header}</h5> : ''}
			<ul className="cardList">{children}</ul>
		</Fragment>
	);
};

export default CardList;
