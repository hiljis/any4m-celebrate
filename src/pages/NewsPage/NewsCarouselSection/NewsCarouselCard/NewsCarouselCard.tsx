import { dateToAgoStr } from '../../../../utils/convert';
import { INews } from '../../../../utils/types';
import './NewsCarouselCard.scss';

type Props = {
	newsItem: INews;
};

const NewsCarouselCard: React.FC<Props> = ({ newsItem }) => {
	const agoStr = dateToAgoStr(newsItem.date);

	return (
		<div className="newsCarouselCard">
			<img src={newsItem.imgUrl} alt="News" className="newsCarouselCard__img" />
			<div className="newsCarouselCard__tag--ago">{agoStr}</div>
			<div className="newsCarouselCard__tag--type">{newsItem.newsType}</div>
			<div className="newsCarouselCard__textContainer">
				<h3 className="newsCarouselCard__header">{newsItem.title}</h3>
				<p className="newsCarouselCard__text">{newsItem.text}</p>
			</div>
		</div>
	);
};

export default NewsCarouselCard;
