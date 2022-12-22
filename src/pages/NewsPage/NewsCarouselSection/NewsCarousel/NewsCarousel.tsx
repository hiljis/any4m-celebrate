import { INews } from '../../../../utils/types';
import NewsCarouselCard from '../NewsCarouselCard/NewsCarouselCard';
import './NewsCarousel.scss';

type Props = {
	news: INews[];
	activePosition: number;
	onPositionChangeHandler: Function;
};

const NewsCarousel: React.FC<Props> = ({ news, activePosition, onPositionChangeHandler }) => {
	return (
		<div className="newsCarouselContainer">
			<div className={`newsCarouselCards newsCarouselCards--${activePosition}`}>
				{news.map((newsItem) => (
					<NewsCarouselCard newsItem={newsItem} />
				))}
			</div>
		</div>
	);
};

export default NewsCarousel;
