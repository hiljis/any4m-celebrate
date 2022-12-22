import CardListItem from '../../../../components/ui/CardList/CardListItem/CardListItem';
import { dateToAgoStr } from '../../../../utils/convert';
import { INews } from '../../../../utils/types';
import './NewsListItem.scss';

type Props = {
	news: INews;
};

const NewsListItem: React.FC<Props> = ({ news }) => {
	const timeAgo = dateToAgoStr(news.date);
	return (
		<CardListItem>
			<div className="newsListItemContent">
				<img src={news.imgUrl} alt="News Item" className="newsListItemContent__img" />
				<div className="newsListItemContent__grid">
					<h4 className="newsListItemContent__title">{news.title}</h4>
					<div className="newsListItemContent__tag--type">{news.newsType}</div>
					<span className="newsListItemContent__timeAgo">{timeAgo}</span>
				</div>
			</div>
		</CardListItem>
	);
};

export default NewsListItem;
