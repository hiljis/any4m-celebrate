import './CardListItem.scss';

type Props = {
	children: React.ReactNode;
};

const CardListItem: React.FC<Props> = ({ children }) => {
	return <li className="cardListItem">{children}</li>;
};

export default CardListItem;
